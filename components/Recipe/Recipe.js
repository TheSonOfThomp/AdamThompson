import React from 'react';
import PropTypes from 'prop-types'
import { parseRecipe } from '@thesonofthomp/recipe-parser/dist';
import { RecipeChart } from './RecipeChart/RecipeChart';
import RecipeList from './RecipeList';

const Recipe = ({children}) => {

  const [recipeJson, setRecipe] = React.useState()

  React.useEffect(() => {
    const string = children
    const json = parseRecipe(string)
    setRecipe(json)
    console.log(json)
  }, [children])

  return (
    <>
      <RecipeChart json={recipeJson}></RecipeChart>
      <RecipeList json={recipeJson}></RecipeList>
    </>
  )
}

Recipe.propTypes = {
  children: PropTypes.node
}

export default Recipe;
