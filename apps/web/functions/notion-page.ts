import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

export const handler = async (event: any, context: any) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const pageId = event.queryStringParameters?.pageId;

  if (!pageId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing pageId parameter' }),
    };
  }

  try {
    // Get page properties
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    // Get page content (blocks)
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify({
        page,
        blocks: blocks.results,
      }),
    };
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Notion page', details: error.message }),
    };
  }
};