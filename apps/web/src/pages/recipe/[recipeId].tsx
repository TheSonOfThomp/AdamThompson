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

export async function getStaticPaths() {
  try {
    const flatRecipes = await fetchFlatRecipePageContent()
    
    const paths = flatRecipes
      .filter((recipe) => recipe && recipe.id) // Filter out null recipes and ensure they have an id
      .map((recipe) => ({
        params: { recipeId: recipe.id },
      }))

    return {
      paths,
      fallback: 'blocking', // or false if you want to show 404 for unknown recipes
    }
  } catch (error) {
    console.error('Failed to fetch recipe paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps({ params: { recipeId } }) {
  try {
    const meta = await fetchPropertiesForPageId(recipeId)
    const block = await fetchContentForPageId(recipeId)

    if (!meta) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        meta: JSON.stringify(meta),
        content: JSON.stringify(block.results),
      },
    }
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    return {
      notFound: true,
    }
  }
}
