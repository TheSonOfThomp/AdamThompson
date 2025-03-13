import React from "react"
import Link from "next/link"
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import {
  fetchContentForPageId,
  fetchFlatRecipePageContent,
  fetchPropertiesForPageId,
} from "../../utilities/notion/fetchRecipes"
import {
  getPageCoverImageURL,
  getPageTitle,
} from "../../utilities/notion/notionUtils"
import { renderNotionContent } from "../../utilities/notion/renderNotionContent"
import DefaultPage from "../../templates/default-page/default-template"
import { BackLink } from "../../components/BackLink/BackLink"
import styles from "./recipePage.module.scss"

export default function RecipePage({ meta: metaJSON, content: contentJSON }) {
  const meta: PageObjectResponse = JSON.parse(metaJSON)
  const content: Array<BlockObjectResponse> = JSON.parse(contentJSON)
  const title = getPageTitle(meta)
  const imgURL = getPageCoverImageURL(meta)
  const renderedContent = renderNotionContent(content)

  return (
    <DefaultPage title={title + " | Adam Thompson"}>
      <BackLink href={"/recipes"}>Back to Recipes</BackLink>
      <h1>{title}</h1>
      <picture className={styles.cover_img}>
        <img src={imgURL}></img>
      </picture>
      {/* @ts-ignore */}
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
  const page_id = process.env.NOTION_RECIPES_PAGE_ID

  if (page_id) {
    const flatRecipePages = await fetchFlatRecipePageContent(page_id)

    return {
      paths: flatRecipePages.map((page) => {
        return {
          params: { recipeId: page?.id },
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
