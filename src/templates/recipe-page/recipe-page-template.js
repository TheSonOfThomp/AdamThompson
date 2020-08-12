import React from 'react';
// import { RecipeChart } from "@thesonofthomp/recipe-parser"


const RecipePage = ({ pageContext, children }) => {
  console.log(pageContext)
  return (
    <div className="RecipePageWrapper">
      Test content
      {JSON.stringify(pageContext)}
      {/* <RecipeChart /> */}
    </div>
  );
}

export default RecipePage;
