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

    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    });

    const childPageBlocks = blocks.results.filter(
      (block: any) => block.type === 'child_page'
    );

    const blogPosts = [];
    for (const block of childPageBlocks) {
      try {
        const page = await notion.pages.retrieve({ page_id: block.id });
        if ('properties' in page) {
          const title = (page.properties.title as any)?.title?.[0]?.text?.content || 'Untitled';
          const publishedDate = (page.properties.Published as any)?.date?.start;
          const excerpt = (page.properties.Excerpt as any)?.rich_text?.[0]?.text?.content || '';
          
          // Generate slug from title
          const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

          blogPosts.push({
            id: page.id,
            title,
            publishedDate,
            excerpt,
            slug,
            page
          });
        }
      } catch (error) {
        console.error(`Error fetching blog post ${block.id}:`, error);
      }
    }

    return blogPosts.sort((a, b) => {
      if (!a.publishedDate) return 1;
      if (!b.publishedDate) return -1;
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    });
  } catch (error) {
    console.error('Error fetching blog posts directly:', error);
    return [];
  }
}

async function getDirectNotionPageBySlug(slug: string): Promise<any> {
  try {
    const posts = await getDirectNotionBlogPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      return null;
    }

    const notion = new Client({
      auth: process.env.NOTION_KEY,
    });

    const content = await notion.blocks.children.list({
      block_id: post.id,
      page_size: 100,
    });

    return {
      ...post,
      content: content.results
    };
  } catch (error) {
    console.error('Error fetching page by slug directly:', error);
    return null;
  }
}

export async function getNotionBlogPosts(): Promise<any[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API');
      return getDirectNotionBlogPosts();
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return [];
    }
  }

  try {
    const response = await fetch(`${baseUrl}/.netlify/functions/notion-api?action=blog-posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API');
      return getDirectNotionBlogPosts();
    }
    
    return [];
  }
}

export async function getAllNotionPageSlugs(): Promise<string[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for slugs');
      const posts = await getDirectNotionBlogPosts();
      return posts
        .filter(post => post.slug)
        .map(post => post.slug);
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return [];
    }
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
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for page content');
      return getDirectNotionPageBySlug(slug);
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return null;
    }
  }

  try {
    const url = `${baseUrl}/.netlify/functions/notion-api?action=blog-content&slug=${encodeURIComponent(slug)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.page;
  } catch (error) {
    console.error('Error fetching page content from Netlify function:', error);
    
    // Fallback to direct API if available
    if (process.env.NOTION_KEY) {
      console.log('Falling back to direct Notion API for page content');
      return getDirectNotionPageBySlug(slug);
    }
    
    return null;
  }
}

// Recipe functions
async function getDirectCategorizedRecipes(): Promise<any[]> {
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

    const categorizedRecipes = [];
    for (const categoryPage of categoryPages) {
      const categoryBlocks = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });

      const recipePages = categoryBlocks.results.filter(
        (block: any) => block.type === 'child_page'
      );

      const recipeMetadata = [];
      for (const recipePage of recipePages) {
        try {
          const page = await notion.pages.retrieve({ page_id: recipePage.id });
          if ('properties' in page) {
            const title = (page.properties.Name as any)?.title?.[0]?.text?.content || 'Untitled';
            recipeMetadata.push({
              id: recipePage.id,
              title,
              page
            });
          }
        } catch (error) {
          console.error(`Error fetching recipe ${recipePage.id}:`, error);
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
      const categoryBlocks = await notion.blocks.children.list({
        block_id: categoryPage.id,
        page_size: 50,
      });

      const recipePages = categoryBlocks.results.filter(
        (block: any) => block.type === 'child_page'
      );

      allRecipeIds.push(...recipePages.map((page: any) => page.id));
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

    const page = await notion.pages.retrieve({ page_id: pageId });
    return page;
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

    const content = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return content;
  } catch (error) {
    console.error('Error fetching recipe content directly:', error);
    return { results: [] };
  }
}

export async function fetchCategorizedRecipePageContent(): Promise<any[]> {
  const baseUrl = getBaseUrl();
  
  // If we're in development, during build, or have no baseUrl, use direct API
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for categorized recipes');
      return getDirectCategorizedRecipes();
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return [];
    }
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
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for recipe IDs');
      return getDirectRecipeIds();
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return [];
    }
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
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for recipe meta');
      return getDirectRecipeMeta(pageId);
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return null;
    }
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
  if (baseUrl === 'http://localhost:8888' || baseUrl === null) {
    if (process.env.NOTION_KEY) {
      console.log('Using direct Notion API for recipe content');
      return getDirectRecipeContent(pageId);
    } else {
      console.warn('No NOTION_KEY available for direct API access');
      return { results: [] };
    }
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
