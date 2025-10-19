import { Client } from '@notionhq/client';
import { BlogPost } from '../../types/BlogPost.types';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export async function getNotionBlogPosts(pageId: string): Promise<Array<BlogPost>> {

  try {
    console.log('Fetching Notion pages for page ID:', pageId);
    // Get child pages from the specified page
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

    // Filter for child page blocks and extract page information
    const pages = response.results
      .filter((block: any) => block.type === 'child_page')
      .map((block: any) => ({
        id: block.id,
        title: block.child_page.title,
        type: block.type,
        datePublished: block.created_time,
        lastEditedTime: block.last_edited_time,
        source: 'notion',
      }));

    return pages;
  } catch (error) {
    console.error('Error fetching Notion pages:', error);
    return [];
  }
}

export async function getNotionPage(pageId: string) {
  try {
    // Get page properties
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    // Get page content (blocks)
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return null;
  }
}

export async function getAllNotionPageIds(parentPageId: string): Promise<string[]> {
  try {
    const response = await notion.blocks.children.list({
      block_id: parentPageId,
    });

    return response.results
      .filter((block: any) => block.type === 'child_page')
      .map((block: any) => block.id);
  } catch (error) {
    console.error('Error fetching page IDs:', error);
    return [];
  }
}