import React from "react"
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { ReactNode } from "react"
import { mapBlockToReactNode } from "./mapBlockToReactNode"

export const renderNotionContent = (
  blocks: Array<BlockObjectResponse>
): ReactNode => {
  console.log(blocks)
  return blocks.map(mapBlockToReactNode)
}
