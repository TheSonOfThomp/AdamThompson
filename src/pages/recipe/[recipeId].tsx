import React from "react"
import {
  fetchContentForPageId,
  fetchFlatRecipePageContent,
  fetchPropertiesForPageId,
} from "../../utilities/notion/fetchRecipes"
import { getPageTitle } from "../../utilities/notion/notionUtils"
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { renderNotionContent } from "../../utilities/notion/renderNotionContent"
import DefaultPage from "../../templates/default-page/default-template"
import Link from "next/link"

export default function RecipePage({ meta: metaJSON, content: contentJSON }) {
  const meta: PageObjectResponse = JSON.parse(metaJSON)
  const content: Array<BlockObjectResponse> = JSON.parse(contentJSON)
  const title = getPageTitle(meta)
  const renderedContent = renderNotionContent(content)

  return (
    <DefaultPage title={title}>
      <Link href={"/recipes"}>Back to Recipes</Link>
      <h1>{title}</h1>
      {renderedContent}
    </DefaultPage>
  )
}

export async function getStaticProps({ params: { recipeId } }) {
  const meta = await fetchPropertiesForPageId(recipeId)
  const block = await fetchContentForPageId(recipeId)

  return {
    props: {
      meta: JSON.stringify(meta),
      content: JSON.stringify(block.results),
    },
  }
}

export const getStaticPaths = async () => {
  const page_id = process.env.NOTION_PAGE_ID

  if (page_id) {
    const flatRecipePages = await fetchFlatRecipePageContent(page_id)

    return {
      paths: flatRecipePages.map((page) => {
        return {
          params: { recipeId: page.id },
        }
      }),
      fallback: false,
    }
  }

  return {
    paths: [],
    fallback: "blocking",
  }
}
