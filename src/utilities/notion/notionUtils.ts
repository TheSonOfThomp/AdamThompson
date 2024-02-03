import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { has, isNull } from "lodash"

export interface PageTitleProperty {
  type: "title"
  title: Array<RichTextItemResponse>
  id: string
}

export const getPageTitle = (page: PageObjectResponse | null) => {
  if (!page) return ""

  const titleObject = page.properties.title as PageTitleProperty
  return titleObject.title[0].plain_text
}

/** Returns whether a page object has an image */
export const doesPageHaveImage = (
  page: PageObjectResponse | BlockObjectResponse | null
): page is PageObjectResponse => {
  return !isNull(page) && isPageObject(page) && !isNull(page.cover)
}

export const getPageCoverImageURL = (
  page: PageObjectResponse | null
): string | undefined => {
  if (!doesPageHaveImage(page)) return
  const cover = page.cover

  if (cover?.type === "external") {
    return cover.external.url
  } else if (cover?.type === "file") {
    return cover.file.url
  }
}

export const isChildPageBlock = (
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is ChildPageBlockObjectResponse => {
  return (
    has(block, "type") && (block as BlockObjectResponse).type === "child_page"
  )
}

export const isPageObject = (
  pageOrBlock: PageObjectResponse | BlockObjectResponse
): pageOrBlock is PageObjectResponse => {
  return pageOrBlock.object === "page"
}
