import React from "react"
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons"

interface BlockContent {
  rich_text: Array<RichTextItemResponse>
}

export const mapBlockToReactNode = (
  block: BlockObjectResponse
): React.ReactNode => {
  const blockType = block.type
  const content = block[blockType] as BlockContent

  switch (blockType) {
    case "heading_1":
      return <h1 key={block.id}>{getRichText(content)}</h1>
    case "heading_2":
      return <h2 key={block.id}>{getRichText(content)}</h2>
    case "heading_3":
      return <h3 key={block.id}>{getRichText(content)}</h3>
    case "bulleted_list_item":
      return <li key={block.id}>{getRichText(content)}</li>
    case "numbered_list_item":
      return <li key={block.id}>{getRichText(content)}</li>
    case "paragraph":
      if (getRichText(content))
        return <p key={block.id}>{getRichText(content)}</p>
      else return <br />
    default:
      console.log(`Unhandled block blockType: ${blockType}`)
      return <></>
  }
}

/**
 * Returns BlockContent content in plain text
 */
const getRichText = (content: BlockContent): React.ReactNode => {
  const textNodes = content.rich_text

  return textNodes.map((textNode, i) => {
    const nodeType = textNode.type
    const key = `text-node-${i}`

    switch (nodeType) {
      case "text":
        return (
          <React.Fragment key={key}>{textNode.text.content}</React.Fragment>
        )
      case "mention": {
        const text = (textNode.mention as any).link_mention.title
        const link = (textNode.mention as any).link_mention.href
        return (
          <a key={key} href={link} target="_blank">
            {text}
            <span
              style={{
                fontSize: "0.5em",
                marginLeft: "0.5em",
                color: "var(--color-brand-base)",
              }}
            >
              <FontAwesomeIcon
                style={{
                  verticalAlign: "super",
                }}
                icon={faExternalLinkSquare}
              />
            </span>
          </a>
        )
      }
      default: {
        console.log(`Unhandled text node type: ${nodeType}`)
        return <></>
      }
    }
  })
}

const getContentId = (content: BlockContent) => {
  return content
}
