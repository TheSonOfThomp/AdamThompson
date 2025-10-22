export interface RecipeCategory {
  id: string
  title: string
  subPages: Array<RecipePageMeta | null>
}

export type RecipePageMeta = any // Simplified type since we're using the function

/** Retrieves an array of {@link RecipeCategory}s, each with populated metadata */
export const fetchCategorizedRecipePageContent = async (
  rootPageId?: string
): Promise<Array<RecipeCategory>> => {
  try {
    const url = rootPageId 
      ? `/.netlify/functions/notion-recipes?pageId=${rootPageId}&format=categorized`
      : '/.netlify/functions/notion-recipes?format=categorized';
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const categorizedRecipes = await response.json();
    return categorizedRecipes;
  } catch (error) {
    console.error('Error fetching categorized recipes:', error);
    return [];
  }
}

/**
 * Retrieves a flat array of {@link RecipePageMeta}.
 *
 * Passing in a `Array<RecipeCategory>` as the 2nd param prevents re-fetching data
 * and flattens the array provided
 */
export const fetchFlatRecipePageContent = async (
  rootPageId?: string,
  categorizedRecipePageContent?: Array<RecipeCategory>
): Promise<Array<RecipePageMeta | null>> => {
  if (categorizedRecipePageContent) {
    // Use provided data
    const flatRecipePageContent = categorizedRecipePageContent.flatMap((cat) =>
      cat.subPages.map((page) => page)
    );
    return flatRecipePageContent;
  }

  try {
    const url = rootPageId 
      ? `/.netlify/functions/notion-recipes?pageId=${rootPageId}&format=flat`
      : '/.netlify/functions/notion-recipes?format=flat';
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const flatRecipes = await response.json();
    return flatRecipes;
  } catch (error) {
    console.error('Error fetching flat recipes:', error);
    return [];
  }
}

// Legacy functions for backward compatibility - these now use the Netlify functions internally
export const fetchPagePropertiesForRecipePageBlock = async (recipePageBlock: any): Promise<any> => {
  // This function is simplified since the logic is now in the Netlify function
  return recipePageBlock;
}

export const fetchPropertiesForPageId = async (page_id: string): Promise<any> => {
  try {
    const response = await fetch(`/.netlify/functions/notion-page?pageId=${page_id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.page;
  } catch (error) {
    console.error('Error fetching page properties:', error);
    return null;
  }
}

export const fetchContentForPageId = async (page_id: string) => {
  try {
    const response = await fetch(`/.netlify/functions/notion-page?pageId=${page_id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { results: data.blocks };
  } catch (error) {
    console.error('Error fetching page content:', error);
    return { results: [] };
  }
}