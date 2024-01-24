import fs from "fs"
import path from "path"
import React, { ComponentProps } from "react"
import styles from "./recipes.module.scss"
import DefaultPage from "../templates/default-page/default-template"

interface RecipesPageProps extends ComponentProps<"section"> {
  recipes: Array<any>
}

const RecipesPage = ({ recipes: _recipes }: RecipesPageProps) => {
  console.log(_recipes)
  return (
    <>
      <DefaultPage title="Recipes">
        <h1>Recipes</h1>

        <p>
          During quarantine, I wanted to try and improve my cooking skills. As I
          got better and tried new things, I made modifications to existing
          recipes, and combined different techniques to make it my own. This is
          my collection of recipes that I've modified enough that I needed to
          write it down somewhere.
          {/* (food recipes, not code "recipes". For that see <a href="/snippets">snippets</a>). */}
        </p>

        <h2>How to read</h2>
        <p>
          These recipes formatted in the style of{" "}
          <a href="http://www.cookingforengineers.com/">
            Cooking for Engineers
          </a>
          —a flowchart that describes when to use and combine each ingredient. I
          personally find this is the clearest way to read a recipe. Check out
          the generator on{" "}
          <a href="https://github.com/TheSonOfThomp/recipe-parser">GitHub</a>.
        </p>

        <div className={styles.recipe_cards}>
          {/* {recipes
            .sort((a, z) => a.title - z.title)
            .map((recipe) => {
              const slug = `recipes/${recipe.slug}`

              return (
                <a
                  href={slug}
                  className={styles.recipe_card}
                  key={recipe.title}
                >
                  <h1 className={styles.recipe_title}>{recipe.title}</h1>
                  <div className={styles.recipe_tags}>
                    {recipe.tags.split(",").map((tag) => (
                      <span className={styles.recipe_tag}>
                        {startCase(tag)}
                      </span>
                    ))}
                  </div>
                  {recipe.image && (
                    <picture className={styles.recipe_image}>
                      <img
                        className={styles.recipe_image}
                        src={`images/food/${recipe.image}`}
                        alt={recipe.title}
                      />
                    </picture>
                  )}
                </a>
              )
            })} */}
        </div>
      </DefaultPage>
    </>
  )
}

export default RecipesPage

export async function getStaticProps() {
  return {
    props: {},
  }
}
