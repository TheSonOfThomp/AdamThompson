import { Client } from "@notionhq/client"
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { isChildPageBlock } from "./notionUtils"
const notion = new Client({ auth: process.env.NOTION_KEY })

const CATEGORIES = ["Food", "Drinks", "Sauces, Spices & Syrups"]
const page_size = 50

export interface RecipeCategory {
  id: string
  title: string
  subPages: Array<RecipePageMeta>
}

export type RecipePageMeta = PageObjectResponse | BlockObjectResponse

/** Retrieves an array of {@link RecipeCategory}s, each with populated metadata */
export const fetchCategorizedRecipePageContent = async (
  rootPageId: string
): Promise<Array<RecipeCategory>> => {
  const blocks = await notion.blocks.children.list({
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

/**  Given a Category block, populate its subPages with content */
const fetchSubPagesForChildRecipeBlock = async (
  categoryPageBlock: ChildPageBlockObjectResponse
): Promise<RecipeCategory> => {
  const subPages = await notion.blocks.children.list({
    block_id: categoryPageBlock.id,
    page_size,
  })

  const recipePageProperties = await Promise.all(
    subPages.results.map(fetchPagePropertiesForRecipePageBlock)
  )

  return {
    id: categoryPageBlock.id,
    title: categoryPageBlock.child_page.title,
    subPages: recipePageProperties,
  }
}

/** Given a Recipe Page block, retrieve its metadata */
const fetchPagePropertiesForRecipePageBlock = async (
  recipePageBlock: PartialBlockObjectResponse | BlockObjectResponse
): Promise<PageObjectResponse | BlockObjectResponse> => {
  if (isChildPageBlock(recipePageBlock)) {
    const recipePageMeta = (await notion.pages.retrieve({
      page_id: recipePageBlock.id,
    })) as PageObjectResponse

    return recipePageMeta
  } else {
    return recipePageBlock as BlockObjectResponse
  }
}
