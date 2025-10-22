const { Client } = require('@notionhq/client');

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// Utility function to generate URL-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { action, slug, pageId } = event.queryStringParameters || {};
    
    // Handle different actions
    switch (action) {
      case 'posts':
        return await handleBlogPosts();
      case 'slugs':
        return await handleBlogSlugs();
      case 'page':
        return await handleBlogPage(slug);
      case 'recipes':
        return await handleRecipes();
      case 'categorized-recipes':
        return await handleCategorizedRecipes();
      case 'recipe-meta':
        return await handleRecipeMeta(pageId);
      case 'recipe-content':
        return await handleRecipeContent(pageId);
      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: 'Invalid action. Use ?action=posts, ?action=slugs, ?action=page&slug=your-slug, ?action=recipes, ?action=categorized-recipes, ?action=recipe-meta&pageId=id, or ?action=recipe-content&pageId=id' 
          }),
        };
    }
  } catch (error) {
    console.error('Error in Notion API function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch Notion data' }),
    };
  }

  // Blog-related functions
  async function handleBlogPosts() {
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!parentPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    const response = await notion.blocks.children.list({
      block_id: parentPageId,
    });

    const allPages = response.results
      .filter((block) => block.type === 'child_page')
      .map((block) => {
        const title = block.child_page.title;
        return {
          id: block.id,
          title,
          slug: generateSlug(title),
          type: block.type,
          datePublished: block.created_time,
          lastEditedTime: block.last_edited_time,
          source: 'notion',
        };
      });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(allPages),
    };
  }

  async function handleBlogSlugs() {
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!parentPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    const response = await notion.blocks.children.list({
      block_id: parentPageId,
    });

    const allPages = response.results
      .filter((block) => block.type === 'child_page')
      .map((block) => {
        const title = block.child_page.title;
        return {
          title,
          slug: generateSlug(title),
          id: block.id
        };
      });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(allPages),
    };
  }

  async function handleBlogPage(slug) {
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!slug) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Slug parameter is required for page action' }),
      };
    }

    if (!parentPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    const response = await notion.blocks.children.list({
      block_id: parentPageId,
    });

    const allPages = response.results
      .filter((block) => block.type === 'child_page')
      .map((block) => {
        const title = block.child_page.title;
        return {
          title,
          slug: generateSlug(title),
          id: block.id
        };
      });

    const matchingPage = allPages.find(page => page.slug === slug);
    
    if (!matchingPage) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: `No page found with slug: ${slug}` }),
      };
    }

    // Get page properties and blocks
    const page = await notion.pages.retrieve({ page_id: matchingPage.id });
    const blocks = await notion.blocks.children.list({
      block_id: matchingPage.id,
      page_size: 100,
    });

    const pageData = {
      page,
      blocks: blocks.results,
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(pageData),
    };
  }

  // Recipe-related functions
  async function handleRecipes() {
    const rootPageId = process.env.NOTION_RECIPES_PAGE_ID;
    
    if (!rootPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_RECIPES_PAGE_ID not configured' }),
      };
    }

    const blocks = await notion.blocks.children.list({
      block_id: rootPageId,
      page_size: 50,
    });

    const categoryPages = blocks.results.filter(
      (block) => block.type === 'child_page'
    );

    // Get all recipe page IDs from all categories
    const allRecipeIds = [];
    
    for (const categoryPage of categoryPages) {
      const subPages = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });
      
      const recipeIds = subPages.results
        .filter((block) => block.type === 'child_page')
        .map((block) => block.id);
      
      allRecipeIds.push(...recipeIds);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(allRecipeIds),
    };
  }

  async function handleCategorizedRecipes() {
    const rootPageId = process.env.NOTION_RECIPES_PAGE_ID;
    const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"];
    
    if (!rootPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_RECIPES_PAGE_ID not configured' }),
      };
    }

    const blocks = await notion.blocks.children.list({
      block_id: rootPageId,
      page_size: 50,
    });

    const categoryPages = blocks.results.filter(
      (block) => block.type === 'child_page' && CATEGORIES.includes(block.child_page.title)
    );

    // Get all recipes for each category
    const categorizedRecipes = [];
    
    for (const categoryPage of categoryPages) {
      const subPages = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });
      
      // Get metadata for each recipe in this category
      const recipeMetadata = [];
      for (const recipePage of subPages.results) {
        if (recipePage.type === 'child_page') {
          try {
            const pageMeta = await notion.pages.retrieve({
              page_id: recipePage.id,
            });
            
            // Only include pages that have a cover image
            if (pageMeta.cover) {
              recipeMetadata.push(pageMeta);
            }
          } catch (error) {
            console.error(`Error fetching recipe ${recipePage.id}:`, error);
          }
        }
      }
      
      categorizedRecipes.push({
        id: categoryPage.id,
        title: categoryPage.child_page.title,
        subPages: recipeMetadata,
      });
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(categorizedRecipes),
    };
  }

  async function handleRecipeMeta(pageId) {
    if (!pageId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'pageId parameter is required' }),
      };
    }

    try {
      const pageMeta = await notion.pages.retrieve({
        page_id: pageId,
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(pageMeta),
      };
    } catch (error) {
      console.error('Error fetching recipe meta:', error);
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Recipe not found' }),
      };
    }
  }

  async function handleRecipeContent(pageId) {
    if (!pageId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'pageId parameter is required' }),
      };
    }

    try {
      const blocks = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 50,
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(blocks),
      };
    } catch (error) {
      console.error('Error fetching recipe content:', error);
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Recipe content not found' }),
      };
    }
  }
};