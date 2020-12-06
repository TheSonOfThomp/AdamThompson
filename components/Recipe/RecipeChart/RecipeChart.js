import React from 'react';
import PropTypes from 'prop-types'
import { Recipe } from "@thesonofthomp/recipe-parser/dist/types"
import { parseRecipe } from "@thesonofthomp/recipe-parser/dist";
import { RecipeChartNode } from './RecipeChartNode/RecipeChartNode';
import styles from './RecipeChart.module.scss';

export const RecipeChart = ({string, json, children} ) => {
  const [recipe, setRecipe] = React.useState()

  React.useEffect(() => {
    if (json) {
      setRecipe(json)
    } else if (children) {
      const string = children
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
          className={styles.recipe}
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

RecipeChart.propTypes = {
  string: PropTypes.string,
  children: PropTypes.node,
  json: PropTypes.object
}