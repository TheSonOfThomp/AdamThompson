import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { has } from "lodash"

export interface PageTitleProperty {
  type: "title"
  title: Array<RichTextItemResponse>
  id: string
}

export const getPageTitle = (page: PageObjectResponse) => {
  const titleObject = page.properties.title as PageTitleProperty

  return titleObject.title[0].plain_text
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
