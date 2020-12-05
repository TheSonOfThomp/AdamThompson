import React from 'react';
import { Recipe } from "@thesonofthomp/recipe-parser/dist/types"
import { parseRecipe } from "@thesonofthomp/recipe-parser/dist";
import { RecipeChartNode } from './RecipeChartNode/RecipeChartNode';
import styles from './RecipeChart.module.scss';

type RecipeComponentProps = {
  string?: string,
  children?: React.ReactNode,
  json?: Recipe,
}

export const RecipeChart = ({string, json, children}:RecipeComponentProps ) => {
  const [recipe, setRecipe] = React.useState<Recipe>()

  React.useEffect(() => {
    if (json) {
      setRecipe(json)
    } else if (children) {
      const string = children as string
      setRecipe(parseRecipe(string))
    } else if (string) {
      setRecipe(parseRecipe(string))
    } else {
      console.warn('Please provide a recipe for RecipeChart');
    }
  }, [string, json, children])

  return (
    <React.Fragment>
      {recipe && (
        <RecipeChartNode
          className='recipe'
          id={recipe.tree.id}
          verb={recipe.tree.verb}
          ingredients={recipe.tree.ingredients}
          tree={recipe.tree.tree}
          depth={recipe.depth}
        />
      )}
    </React.Fragment>
  )
}