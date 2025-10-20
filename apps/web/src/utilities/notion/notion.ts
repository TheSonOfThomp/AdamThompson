import { BlogPost } from '../../types/BlogPost.types';
import { NotionClient } from './notionUtils';

export async function getNotionBlogPosts(pageId: string): Promise<Array<BlogPost>> {

  try {
    // Get child pages from the specified page
    const response = await NotionClient.blocks.children.list({
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

    return pages;
  } catch (error) {
    throw new Error('Error fetching Notion pages: ' + error);
  }
}

export async function getNotionPage(pageId: string) {
  try {
    // Get page properties
    const page = await NotionClient.pages.retrieve({ page_id: pageId });
    
    // Get page content (blocks)
    const blocks = await NotionClient.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    throw new Error('Error fetching Notion page: ' + error);
  }
}

export async function getAllNotionPageIds(parentPageId: string): Promise<string[]> {
  try {
    const response = await NotionClient.blocks.children.list({
      block_id: parentPageId,
    });

    return response.results
      .filter((block: any) => block.type === 'child_page')
      .map((block: any) => block.id);
  } catch (error) {
    throw new Error('Error fetching page IDs: ' + error);
  }
}

// Utility function to generate URL-friendly slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Get all page titles and their corresponding IDs for slug generation
export async function getAllNotionPageSlugs(parentPageId: string): Promise<Array<{title: string, slug: string, id: string}>> {
  try {
    const response = await NotionClient.blocks.children.list({
      block_id: parentPageId,
    });

    return response.results
      .filter((block: any) => block.type === 'child_page')
      .map((block: any) => {
        const title = block.child_page.title;
        return {
          title,
          slug: generateSlug(title),
          id: block.id
        };
      });
  } catch (error) {
    throw new Error('Error fetching page slugs: ' + error);
  }
}

// Get a Notion page by its title slug
export async function getNotionPageBySlug(parentPageId: string, slug: string) {
  try {
    // First, get all pages to find the one with matching slug
    const pages = await getAllNotionPageSlugs(parentPageId);
    const matchingPage = pages.find(page => page.slug === slug);
    
    if (!matchingPage) {
      console.log(`No page found with slug: ${slug}`);
      return null;
    }

    // Now get the full page content using the ID
    return await getNotionPage(matchingPage.id);
  } catch (error) {
    throw new Error('Error fetching page by slug: ' + error);
  }
}