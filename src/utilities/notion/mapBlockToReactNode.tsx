import React from "react"
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { Polymorph, PolymorphicAs } from "@leafygreen-ui/polymorphic"

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
      return <h1>{getPlainText(content)}</h1>
    case "heading_2":
      return <h2>{getPlainText(content)}</h2>
    case "heading_3":
      return <h3>{getPlainText(content)}</h3>
    case "bulleted_list_item":
      return <li>{getPlainText(content)}</li>
    case "paragraph":
      if (getPlainText(content)) return <p>{getPlainText(content)}</p>
    default:
      return <></>
  }
}

const getPlainText = (content: BlockContent): string => {
  return content.rich_text[0]?.plain_text
}
