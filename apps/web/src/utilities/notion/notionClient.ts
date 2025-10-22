// Client-side functions that call Netlify functions instead of direct Notion API
import { Client } from '@notionhq/client';

// Helper function to get the base URL for API calls
function getBaseUrl() {
  // During build time or server-side rendering
  if (typeof window === 'undefined') {
    // Check if we're in a Netlify environment
    if (process.env.NETLIFY) {
      return process.env.URL || process.env.DEPLOY_PRIME_URL || 'http://localhost:8888';
    }
    // Local development
    return 'http://localhost:8888';
  }
  // Client-side
  return '';
}

// Fallback to direct Notion API for local development
async function getDirectNotionBlogPosts(): Promise<any[]> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const pageId = process.env.NOTION_BLOG_PAGE_ID;
    if (!pageId) {
      console.warn('NOTION_BLOG_PAGE_ID not configured');
      return [];
    }

    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

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
    console.error('Error fetching Notion pages directly:', error);
    return [];
  }
}

async function getDirectNotionPageSlugs(): Promise<Array<{title: string, slug: string, id: string}>> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    if (!parentPageId) {
      console.warn('NOTION_BLOG_PAGE_ID not configured');
      return [];
    }

    const response = await notion.blocks.children.list({
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
    console.error('Error fetching page slugs directly:', error);
    return [];
  }
}

async function getDirectNotionPageBySlug(slug: string) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const parentPageId = process.env.NOTION_BLOG_PAGE_ID;
    if (!parentPageId) {
      console.warn('NOTION_BLOG_PAGE_ID not configured');
      return null;
    }

    // First, get all pages to find the one with matching slug
    const pages = await getDirectNotionPageSlugs();
    const matchingPage = pages.find(page => page.slug === slug);
    
    if (!matchingPage) {
      return null;
    }

    // Get page properties
    const page = await notion.pages.retrieve({ page_id: matchingPage.id });
    
    // Get page content (blocks)
    const blocks = await notion.blocks.children.list({
      block_id: matchingPage.id,
      page_size: 100,
    });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error('Error fetching page by slug directly:', error);
    return null;
  }
}

export async function getNotionBlogPosts(): Promise<any[]> {
  // During development, if Netlify functions aren't available, use direct API
  if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
    try {
      return await getDirectNotionBlogPosts();
    } catch (error) {
      console.log('Direct API failed, trying Netlify function...');
    }
  }

  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/.netlify/functions/notion-api?action=posts`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts from Netlify function:', error);
    
    // Fallback to direct API if we're in development
    if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
      console.log('Falling back to direct Notion API...');
      return await getDirectNotionBlogPosts();
    }
    
    return [];
  }
}

export async function getAllNotionPageSlugs(): Promise<Array<{title: string, slug: string, id: string}>> {
  // During development, if Netlify functions aren't available, use direct API
  if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
    try {
      return await getDirectNotionPageSlugs();
    } catch (error) {
      console.log('Direct API failed, trying Netlify function...');
    }
  }

  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/.netlify/functions/notion-api?action=slugs`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const slugs = await response.json();
    return slugs;
  } catch (error) {
    console.error('Error fetching page slugs from Netlify function:', error);
    
    // Fallback to direct API if we're in development
    if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
      console.log('Falling back to direct Notion API...');
      return await getDirectNotionPageSlugs();
    }
    
    return [];
  }
}

export async function getNotionPageBySlug(slug: string) {
  // During development, if Netlify functions aren't available, use direct API
  if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
    try {
      return await getDirectNotionPageBySlug(slug);
    } catch (error) {
      console.log('Direct API failed, trying Netlify function...');
    }
  }

  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/.netlify/functions/notion-api?action=page&slug=${encodeURIComponent(slug)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const pageData = await response.json();
    return pageData;
  } catch (error) {
    console.error('Error fetching page by slug from Netlify function:', error);
    
    // Fallback to direct API if we're in development
    if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
      console.log('Falling back to direct Notion API...');
      return await getDirectNotionPageBySlug(slug);
    }
    
    return null;
  }
}

// Keep the utility function for slug generation (doesn't need API call)
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}