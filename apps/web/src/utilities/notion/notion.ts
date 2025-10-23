import { BlogPost } from '../../types/BlogPost.types';
import { Client } from '@notionhq/client';

// Initialize Notion client with environment variable
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_KEY,
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

export async function getNotionBlogPosts(pageId?: string): Promise<Array<BlogPost>> {
  try {

    const targetPageId = pageId || process.env.NEXT_PUBLIC_NOTION_BLOG_PAGE_ID || process.env.NOTION_BLOG_PAGE_ID;
    
    if (!targetPageId) {
      console.error('Missing pageId parameter or NOTION_BLOG_PAGE_ID environment variable');
      return [];
    }
    
    // Get child pages from the specified page
    const response = await notion.blocks.children.list({
      block_id: targetPageId,
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

export async function getAllNotionPageIds(parentPageId?: string): Promise<string[]> {
  try {
    const blogPosts = await getNotionBlogPosts(parentPageId);
    return blogPosts.map(post => post.id);
  } catch (error) {
    console.error('Error fetching page IDs:', error);
    return [];
  }
}

// Get all page titles and their corresponding IDs for slug generation
export async function getAllNotionPageSlugs(parentPageId?: string): Promise<Array<{title: string, slug: string, id: string}>> {
  try {
    const blogPosts = await getNotionBlogPosts(parentPageId);
    return blogPosts.map(post => ({
      title: post.title,
      slug: post.slug,
      id: post.id
    }));
  } catch (error) {
    console.error('Error fetching page slugs:', error);
    return [];
  }
}

// Get a Notion page by its title slug
export async function getNotionPageBySlug(parentPageId?: string, slug?: string) {
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
    console.error('Error fetching page by slug:', error);
    return null;
  }
}