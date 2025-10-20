
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { doesPageHaveImage, isChildPageBlock, NotionClient } from "./notionUtils"

const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"]
const page_size = 50

export interface RecipeCategory {
  id: string
  title: string
  subPages: Array<RecipePageMeta | null>
}

export type RecipePageMeta = PageObjectResponse | BlockObjectResponse

/** Retrieves an array of {@link RecipeCategory}s, each with populated metadata */
export const fetchCategorizedRecipePageContent = async (
  rootPageId: string
): Promise<Array<RecipeCategory>> => {
  const blocks = await NotionClient.blocks.children.list({
    block_id: rootPageId,
    page_size,
  })

  const categoryPages = (blocks.results as Array<BlockObjectResponse>).filter(
    (b) => isChildPageBlock(b) && CATEGORIES.includes(b.child_page.title)
  ) as Array<ChildPageBlockObjectResponse>

  const populatedCategoryPages = await Promise.all(
    categoryPages.map(fetchSubPagesForChildRecipeBlock)
  )

  return populatedCategoryPages
}

/**
 * Retrieves a flat array of {@link RecipePageMeta}.
 *
 * Passing in a `Array<RecipeCategory>` as the 2nd param prevents re-fetching data
 * and flattens the array provided
 */
export const fetchFlatRecipePageContent = async (
  rootPageId: string,
  categorizedRecipePageContent?: Array<RecipeCategory>
): Promise<Array<RecipePageMeta | null>> => {
  const categorizedRecipes =
    categorizedRecipePageContent ??
    (await fetchCategorizedRecipePageContent(rootPageId))

  const flatRecipePageContent = categorizedRecipes.flatMap((cat) =>
    cat.subPages.map((page) => page)
  )

  return flatRecipePageContent
}

/** Given a Category block, populate its subPages with content */
const fetchSubPagesForChildRecipeBlock = async (
  categoryPageBlock: ChildPageBlockObjectResponse
): Promise<RecipeCategory> => {
  const subPages = await NotionClient.blocks.children.list({
    block_id: categoryPageBlock.id,
    page_size,
  })

  const recipePageProperties = await Promise.all(
    subPages.results.map(fetchPagePropertiesForRecipePageBlock)
  )

  return {
    id: categoryPageBlock.id,
    title: categoryPageBlock.child_page.title,
    subPages: recipePageProperties.filter(doesPageHaveImage),
  }
}

/** Given a Recipe Page block, retrieve its metadata */
export const fetchPagePropertiesForRecipePageBlock = async (
  recipePageBlock: PartialBlockObjectResponse | BlockObjectResponse
): Promise<PageObjectResponse | BlockObjectResponse | null> => {
  if (isChildPageBlock(recipePageBlock)) {
    return await fetchPropertiesForPageId(recipePageBlock.id)
  } else {
    return recipePageBlock as BlockObjectResponse
  }
}

export const fetchPropertiesForPageId = async (
  page_id: string
): Promise<PageObjectResponse | null> => {
  try {
    const pageMeta = (await NotionClient.pages.retrieve({
      page_id,
    })) as PageObjectResponse

    return pageMeta
  } catch (err) {
    console.error(err)
    return null
  }
}

export const fetchContentForPageId = async (page_id: string) => {
  const blocks = await NotionClient.blocks.children.list({
    block_id: page_id,
    page_size,
  })

  return blocks
}
