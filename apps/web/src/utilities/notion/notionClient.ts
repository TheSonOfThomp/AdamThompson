// Client-side functions that call Netlify functions instead of direct Notion API
import { Client } from '@notionhq/client';

// Helper function to get the base URL for API calls
function getBaseUrl() {
  // During build time or server-side rendering
  if (typeof window === 'undefined') {
    // Check if we're in a Netlify build environment
    if (process.env.NETLIFY || process.env.NETLIFY_BUILD_BASE || process.env.CI) {
      // During build time, always use direct API calls since functions aren't available
      console.log('Netlify build environment detected, using direct API');
      return null;
    }
    // Local development
    return 'http://localhost:8888';
  }
  // Client-side - use relative URLs which will resolve to the current domain
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

export async function getAllNotionPageSlugs(): Promise<string[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if ((baseUrl === 'http://localhost:8888' || baseUrl === null) && process.env.NOTION_KEY) {
    console.log('Using direct Notion API for slugs');
    const posts = await getDirectNotionBlogPosts();
    return posts
      .filter(post => post.slug)
      .map(post => post.slug);
  }

  try {
    const response = await fetch(`${baseUrl}/.netlify/functions/notion-api?action=blog-posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const posts = data.posts || [];
    
    return posts
      .filter((post: any) => post.slug)
      .map((post: any) => post.slug);
  } catch (error) {
    console.error('Error fetching page slugs from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for slugs');
      const posts = await getDirectNotionBlogPosts();
      return posts
        .filter(post => post.slug)
        .map(post => post.slug);
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

// Recipe-related functions
export async function fetchCategorizedRecipePageContent(): Promise<any[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if ((baseUrl === 'http://localhost:8888' || baseUrl === null) && process.env.NOTION_KEY) {
    console.log('Using direct Notion API for categorized recipes');
    return getDirectCategorizedRecipes();
  }

  try {
    const url = `${baseUrl}/.netlify/functions/notion-api?action=categorized-recipes`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categorized recipes from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for categorized recipes');
      return getDirectCategorizedRecipes();
    }
    
    return [];
  }
}

export async function fetchFlatRecipePageContent(): Promise<string[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if ((baseUrl === 'http://localhost:8888' || baseUrl === null) && process.env.NOTION_KEY) {
    console.log('Using direct Notion API for recipe IDs');
    return getDirectRecipeIds();
  }

  try {
    const url = `${baseUrl}/.netlify/functions/notion-api?action=recipes`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const recipeIds = await response.json();
    return recipeIds;
  } catch (error) {
    console.error('Error fetching recipe IDs from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for recipe IDs');
      return getDirectRecipeIds();
    }
    
    return [];
  }
}

export async function fetchPropertiesForPageId(pageId: string): Promise<any> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if ((baseUrl === 'http://localhost:8888' || baseUrl === null) && process.env.NOTION_KEY) {
    console.log('Using direct Notion API for recipe meta');
    return getDirectRecipeMeta(pageId);
  }

  try {
    const url = `${baseUrl}/.netlify/functions/notion-api?action=recipe-meta&pageId=${encodeURIComponent(pageId)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const meta = await response.json();
    return meta;
  } catch (error) {
    console.error('Error fetching recipe meta from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for recipe meta');
      return getDirectRecipeMeta(pageId);
    }
    
    return null;
  }
}

export async function fetchContentForPageId(pageId: string): Promise<any> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if ((baseUrl === 'http://localhost:8888' || baseUrl === null) && process.env.NOTION_KEY) {
    console.log('Using direct Notion API for recipe content');
    return getDirectRecipeContent(pageId);
  }

  try {
    const url = `${baseUrl}/.netlify/functions/notion-api?action=recipe-content&pageId=${encodeURIComponent(pageId)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        return { results: [] };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const content = await response.json();
    return content;
  } catch (error) {
    console.error('Error fetching recipe content from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for recipe content');
      return getDirectRecipeContent(pageId);
    }
    
    return { results: [] };
  }
}

// Direct API fallback functions for recipes
async function getDirectCategorizedRecipes(): Promise<any[]> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const rootPageId = process.env.NOTION_RECIPES_PAGE_ID;
    const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"];
    
    if (!rootPageId) {
      console.warn('NOTION_RECIPES_PAGE_ID not configured');
      return [];
    }

    const blocks = await notion.blocks.children.list({
      block_id: rootPageId,
      page_size: 50,
    });

    const categoryPages = blocks.results.filter(
      (block: any) => block.type === 'child_page' && CATEGORIES.includes(block.child_page.title)
    );

    const categorizedRecipes = [];
    
    for (const categoryPage of categoryPages) {
      const subPages = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });
      
      const recipeMetadata = [];
      for (const recipePage of subPages.results) {
        if ((recipePage as any).type === 'child_page') {
          try {
            const pageMeta = await notion.pages.retrieve({
              page_id: recipePage.id,
            });
            
            if ((pageMeta as any).cover) {
              recipeMetadata.push(pageMeta);
            }
          } catch (error) {
            console.error(`Error fetching recipe ${recipePage.id}:`, error);
          }
        }
      }
      
      categorizedRecipes.push({
        id: categoryPage.id,
        title: (categoryPage as any).child_page.title,
        subPages: recipeMetadata,
      });
    }

    return categorizedRecipes;
  } catch (error) {
    console.error('Error fetching categorized recipes directly:', error);
    return [];
  }
}

async function getDirectRecipeIds(): Promise<string[]> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const rootPageId = process.env.NOTION_RECIPES_PAGE_ID;
    if (!rootPageId) {
      console.warn('NOTION_RECIPES_PAGE_ID not configured');
      return [];
    }

    const blocks = await notion.blocks.children.list({
      block_id: rootPageId,
      page_size: 50,
    });

    const categoryPages = blocks.results.filter(
      (block: any) => block.type === 'child_page'
    );

    const allRecipeIds = [];
    
    for (const categoryPage of categoryPages) {
      const subPages = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });
      
      const recipeIds = subPages.results
        .filter((block: any) => block.type === 'child_page')
        .map((block: any) => block.id);
      
      allRecipeIds.push(...recipeIds);
    }

    return allRecipeIds;
  } catch (error) {
    console.error('Error fetching recipe IDs directly:', error);
    return [];
  }
}

async function getDirectRecipeMeta(pageId: string): Promise<any> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const pageMeta = await notion.pages.retrieve({
      page_id: pageId,
    });

    return pageMeta;
  } catch (error) {
    console.error('Error fetching recipe meta directly:', error);
    return null;
  }
}

async function getDirectRecipeContent(pageId: string): Promise<any> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    });

    return blocks;
  } catch (error) {
    console.error('Error fetching recipe content directly:', error);
    return { results: [] };
  }
}