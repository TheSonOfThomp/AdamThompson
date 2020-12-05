import React from 'react';
import { parseRecipe } from '@thesonofthomp/recipe-parser/dist';
import { Recipe as TRecipe } from '@thesonofthomp/recipe-parser/dist/types';
import { RecipeChart } from './RecipeChart/RecipeChart';
import './Recipe.scss';
import RecipeList from './RecipeList';

type RecipeProps = {
  children: React.ReactNode
}
const Recipe = ({children}: RecipeProps) => {

  const [recipeJson, setRecipe] = React.useState<TRecipe>()

  React.useEffect(() => {
    const string = children as string
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

export default Recipe;
