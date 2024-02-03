import React from "react"
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

interface BlockContent {
  rich_text: Array<RichTextItemResponse>
}

export const mapBlockToReactNode = (
  block: BlockObjectResponse
): React.ReactNode => {
  const type = block.type
  const content = block[type] as BlockContent

  switch (type) {
    case "heading_1":
      return <h1 key={block.id}>{getPlainText(content)}</h1>
    case "heading_2":
      return <h2 key={block.id}>{getPlainText(content)}</h2>
    case "heading_3":
      return <h3 key={block.id}>{getPlainText(content)}</h3>
    case "bulleted_list_item":
      return <li key={block.id}>{getPlainText(content)}</li>
    case "paragraph":
      if (getPlainText(content))
        return <p key={block.id}>{getPlainText(content)}</p>
    default:
      console.log("Unmapped content", content)
      return <></>
  }
}

/**
 * Returns BlockContent content in plain text
 */
const getPlainText = (content: BlockContent): string => {
  return content.rich_text[0]?.plain_text
}

const getContentId = (content: BlockContent) => {
  return content
}
