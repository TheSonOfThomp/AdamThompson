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
    const { slug } = event.queryStringParameters || {};
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!slug) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Slug parameter is required' }),
      };
    }

    if (!parentPageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    // First, get all pages to find the one with matching slug
    const response = await notion.blocks.children.list({
      block_id: parentPageId,
    });

    const pages = response.results
      .filter((block) => block.type === 'child_page')
      .map((block) => {
        const title = block.child_page.title;
        return {
          title,
          slug: generateSlug(title),
          id: block.id
        };
      });

    const matchingPage = pages.find(page => page.slug === slug);
    
    if (!matchingPage) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: `No page found with slug: ${slug}` }),
      };
    }

    // Get page properties
    const page = await notion.pages.retrieve({ page_id: matchingPage.id });
    
    // Get page content (blocks)
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
  } catch (error) {
    console.error('Error fetching Notion page by slug:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch page' }),
    };
  }
};