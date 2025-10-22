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
    const pageId = process.env.NOTION_BLOG_PAGE_ID;
    
    if (!pageId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'NOTION_BLOG_PAGE_ID not configured' }),
      };
    }

    // Get child pages from the specified page
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

    // Filter for child page blocks and extract page information
    const pages = response.results
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
      body: JSON.stringify(pages),
    };
  } catch (error) {
    console.error('Error fetching Notion blog posts:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch blog posts' }),
    };
  }
};