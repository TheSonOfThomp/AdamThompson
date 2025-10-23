import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"];
const page_size = 50;

export interface RecipeCategory {
  id: string
  title: string
  subPages: Array<RecipePageMeta | null>
}

export type RecipePageMeta = any // Simplified type since we're using the function

function isChildPageBlock(block: any): block is ChildPageBlockObjectResponse {
  return block.type === 'child_page';
}

function doesPageHaveImage(page: any): boolean {
  return page?.cover?.external?.url || page?.cover?.file?.url;
}

/** Retrieves an array of {@link RecipeCategory}s, each with populated metadata */
export const fetchCategorizedRecipePageContent = async (
  rootPageId?: string
): Promise<Array<RecipeCategory>> => {
  try {
    const targetPageId = rootPageId || process.env.NEXT_PUBLIC_NOTION_RECIPES_PAGE_ID || process.env.NOTION_RECIPES_PAGE_ID;
    
    if (!targetPageId) {
      console.error('Missing pageId parameter or NOTION_RECIPES_PAGE_ID environment variable');
      return [];
    }

    const blocks = await notion.blocks.children.list({
      block_id: targetPageId,
      page_size,
    });

    const categoryPages = (blocks.results as Array<BlockObjectResponse>).filter(
      (b) => isChildPageBlock(b) && CATEGORIES.includes(b.child_page.title)
    ) as Array<ChildPageBlockObjectResponse>;

    const populatedCategoryPages = await Promise.all(
      categoryPages.map(fetchSubPagesForChildRecipeBlock)
    );

    return populatedCategoryPages;
  } catch (error) {
    console.error('Error fetching categorized recipes:', error);
    return [];
  }
}

/**
 * Retrieves a flat array of {@link RecipePageMeta}.
 *
 * Passing in a `Array<RecipeCategory>` as the 2nd param prevents re-fetching data
 * and flattens the array provided
 */
export const fetchFlatRecipePageContent = async (
  rootPageId?: string,
  categorizedRecipePageContent?: Array<RecipeCategory>
): Promise<Array<RecipePageMeta | null>> => {
  if (categorizedRecipePageContent) {
    // Use provided data
    const flatRecipePageContent = categorizedRecipePageContent.flatMap((cat) =>
      cat.subPages.map((page) => page)
    );
    return flatRecipePageContent;
  }

  try {
    const categorizedRecipes = await fetchCategorizedRecipePageContent(rootPageId);
    const flatRecipePageContent = categorizedRecipes.flatMap((cat) =>
      cat.subPages.map((page) => page)
    );
    return flatRecipePageContent;
  } catch (error) {
    console.error('Error fetching flat recipes:', error);
    return [];
  }
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

export const fetchPropertiesForPageId = async (page_id: string): Promise<PageObjectResponse | null> => {
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

export const fetchContentForPageId = async (page_id: string) => {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: page_id,
      page_size: 100,
    });
    return { results: blocks.results };
  } catch (error) {
    console.error('Error fetching page content:', error);
    return { results: [] };
  }
}