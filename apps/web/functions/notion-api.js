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
    const { action, slug } = event.queryStringParameters || {};
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!parentPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    // Get all child pages first (needed for all actions)
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

    // Handle different actions
    switch (action) {
      case 'posts':
        // Return blog posts (same as old notion-blog-posts)
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(allPages),
        };

      case 'slugs':
        // Return just slugs and IDs (same as old notion-page-slugs)
        const slugData = allPages.map(page => ({
          title: page.title,
          slug: page.slug,
          id: page.id
        }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(slugData),
        };

      case 'page':
        // Get specific page by slug (same as old notion-page-by-slug)
        if (!slug) {
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Slug parameter is required for page action' }),
          };
        }

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

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: 'Invalid action. Use ?action=posts, ?action=slugs, or ?action=page&slug=your-slug' 
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
};