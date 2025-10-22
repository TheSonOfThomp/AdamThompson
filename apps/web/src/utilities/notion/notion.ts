import { BlogPost } from '../../types/BlogPost.types';

export async function getNotionBlogPosts(pageId?: string): Promise<Array<BlogPost>> {
  try {
    console.log('Fetching Notion pages for page ID:', pageId);
    
    // Call the Netlify function instead of direct Notion API
    const url = pageId 
      ? `/.netlify/functions/notion-blog-posts?pageId=${pageId}`
      : '/.netlify/functions/notion-blog-posts';
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const pages = await response.json();
    return pages;
  } catch (error) {
    console.error('Error fetching Notion pages:', error);
    return [];
  }
}

export async function getNotionPage(pageId: string) {
  try {
    const response = await fetch(`/.netlify/functions/notion-page?pageId=${pageId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
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