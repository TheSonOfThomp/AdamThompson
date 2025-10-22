import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NOTION_KEY });

const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"];
const page_size = 50;

interface RecipeCategory {
  id: string;
  title: string;
  subPages: Array<any>;
}

function isChildPageBlock(block: any): block is ChildPageBlockObjectResponse {
  return block.type === 'child_page';
}

function doesPageHaveImage(page: any): boolean {
  return page?.cover?.external?.url || page?.cover?.file?.url;
}

export const handler = async (event: any, context: any) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const pageId = event.queryStringParameters?.pageId || process.env.NOTION_RECIPES_PAGE_ID;
  const format = event.queryStringParameters?.format || 'categorized'; // 'categorized' or 'flat'

  if (!pageId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing pageId parameter or NOTION_RECIPES_PAGE_ID environment variable' }),
    };
  }

  try {
    if (format === 'flat') {
      const flatRecipes = await fetchFlatRecipePageContent(pageId);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET',
        },
        body: JSON.stringify(flatRecipes),
      };
    } else {
      const categorizedRecipes = await fetchCategorizedRecipePageContent(pageId);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET',
        },
        body: JSON.stringify(categorizedRecipes),
      };
    }
  } catch (error) {
    console.error('Error fetching Notion recipes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Notion recipes', details: error.message }),
    };
  }
};

// Helper functions (moved from fetchRecipes.ts)
async function fetchCategorizedRecipePageContent(rootPageId: string): Promise<Array<RecipeCategory>> {
  const blocks = await notion.blocks.children.list({
    block_id: rootPageId,
    page_size,
  });

  const categoryPages = (blocks.results as Array<BlockObjectResponse>).filter(
    (b) => isChildPageBlock(b) && CATEGORIES.includes(b.child_page.title)
  ) as Array<ChildPageBlockObjectResponse>;

  const populatedCategoryPages = await Promise.all(
    categoryPages.map(fetchSubPagesForChildRecipeBlock)
  );

  return populatedCategoryPages;
}

async function fetchFlatRecipePageContent(
  rootPageId: string,
  categorizedRecipePageContent?: Array<RecipeCategory>
): Promise<Array<any>> {
  const categorizedRecipes =
    categorizedRecipePageContent ??
    (await fetchCategorizedRecipePageContent(rootPageId));

  const flatRecipePageContent = categorizedRecipes.flatMap((cat) =>
    cat.subPages.map((page) => page)
  );

  return flatRecipePageContent;
}

async function fetchSubPagesForChildRecipeBlock(
  categoryPageBlock: ChildPageBlockObjectResponse
): Promise<RecipeCategory> {
  const subPages = await notion.blocks.children.list({
    block_id: categoryPageBlock.id,
    page_size,
  });

  const recipePageProperties = await Promise.all(
    subPages.results.map(fetchPagePropertiesForRecipePageBlock)
  );

  return {
    id: categoryPageBlock.id,
    title: categoryPageBlock.child_page.title,
    subPages: recipePageProperties.filter(doesPageHaveImage),
  };
}

async function fetchPagePropertiesForRecipePageBlock(
  recipePageBlock: PartialBlockObjectResponse | BlockObjectResponse
): Promise<PageObjectResponse | BlockObjectResponse | null> {
  if (isChildPageBlock(recipePageBlock)) {
    return await fetchPropertiesForPageId(recipePageBlock.id);
  } else {
    return recipePageBlock as BlockObjectResponse;
  }
}

async function fetchPropertiesForPageId(page_id: string): Promise<PageObjectResponse | null> {
  try {
    const pageMeta = (await notion.pages.retrieve({
      page_id,
    })) as PageObjectResponse;

    return pageMeta;
  } catch (err) {
    console.error(err);
    return null;
  }
}