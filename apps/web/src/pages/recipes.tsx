import React, { ComponentProps } from "react"
import styles from "./recipes.module.scss"
import DefaultPage from "../templates/default-page/default-template"
import {
  type RecipeCategory,
  type RecipePageMeta,
  fetchCategorizedRecipePageContent,
  fetchFlatRecipePageContent,
} from "../utilities/notion/fetchRecipes"
import {
  getPageCoverImageURL,
  getPageTitle,
  isPageObject,
} from "../utilities/notion/notionUtils"
import { RecipeCard } from "../components/card/RecipeCard/RecipeCard"

interface RecipesPageProps extends ComponentProps<"section"> {
  categorizedRecipes: string
  flatRecipes: string
  recipes: Array<any>
}

const RecipesPage = ({
  recipes: _recipes,
  categorizedRecipes: categorizedRecipesJSONString,
  flatRecipes: flatRecipesJSONString,
}: RecipesPageProps) => {
  console.log({
    categorizedRecipesJSONString,
    flatRecipesJSONString,
  })

  const categorizedRecipes: Array<RecipeCategory> | undefined =
    categorizedRecipesJSONString
      ? JSON.parse(categorizedRecipesJSONString)
      : undefined
  const flatRecipes: Array<RecipePageMeta> = flatRecipesJSONString
    ? JSON.parse(flatRecipesJSONString)
    : undefined

  return (
    <>
      <DefaultPage title="Recipes | Adam Thompson">
        <h1>Recipes</h1>

        <p>
          During quarantine, I wanted to try and improve my cooking skills. As I
          got better and tried new things, I made modifications to existing
          recipes, and combined different techniques to make it my own. This is
          my collection of recipes that I've modified enough that I needed to
          write it down somewhere.
          {/* (food recipes, not code "recipes". For that see <a href="/snippets">snippets</a>). */}
        </p>

        {categorizedRecipes?.map((category) => (
          <section>
            <h2>{category.title}</h2>
            <div key={category.id} className={styles.recipe_cards}>
              {category.subPages.map((recipe) => {
                if (recipe && isPageObject(recipe)) {
                  const title = getPageTitle(recipe)
                  const imageUrl = getPageCoverImageURL(recipe)
                  return (
                    <RecipeCard
                      title={title}
                      href={`/recipe/${recipe.id}`}
                      imageUrl={imageUrl}
                    />
                  )
                }
              })}
            </div>
          </section>
        ))}

        <details>
          <summary>
            <b>How to read Table Recipes</b>
          </summary>
          These recipes formatted in the style of{" "}
          <a href="http://www.cookingforengineers.com/">
            Cooking for Engineers
          </a>
          —a flowchart that describes when to use and combine each ingredient. I
          personally find this is the clearest way to read a recipe. Check out
          the generator on{" "}
          <a href="https://github.com/TheSonOfThomp/recipe-parser">GitHub</a>.
        </details>
      </DefaultPage>
    </>
  )
}

export default RecipesPage

export async function getStaticProps() {
  const page_id = process.env.NOTION_PAGE_ID

  if (page_id) {
    const categorizedRecipes = await fetchCategorizedRecipePageContent(page_id)

    const flatRecipes = await fetchFlatRecipePageContent(
      page_id,
      categorizedRecipes
    )

    return {
      props: {
        categorizedRecipes: JSON.stringify(
          categorizedRecipes.filter((cat) => cat.subPages.length > 1)
        ),
        flatRecipes: JSON.stringify(flatRecipes),
      },
    }
  }

  return {
    props: {},
  }
}
