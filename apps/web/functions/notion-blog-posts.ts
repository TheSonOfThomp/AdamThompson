import { Client } from '@notionhq/client';

// Initialize Notion client with environment variable
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// Utility function to generate URL-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

export const handler = async (event: any, context: any) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const pageId = event.queryStringParameters?.pageId || process.env.NOTION_BLOG_PAGE_ID;

  if (!pageId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing pageId parameter or NOTION_BLOG_PAGE_ID environment variable' }),
    };
  }

  try {
    console.log('Fetching Notion pages for page ID:', pageId);
    
    // Get child pages from the specified page
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

    // Filter for child page blocks and extract page information
    const pages = response.results
      .filter((block: any) => block.type === 'child_page')
      .map((block: any) => {
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
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(pages),
    };
  } catch (error) {
    console.error('Error fetching Notion pages:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Notion pages', details: error.message }),
    };
  }
};