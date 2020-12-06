import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
// import { TreeNode } from "@thesonofthomp/recipe-parser/dist/types"

export const RecipeChartNode = ({ className, id, verb, ingredients, tree, depth }) => {

  const stepRef = useRef()

  useEffect(() => {
    stepRef.current.style.setProperty('--step-depth', `${depth+1}fr`)
  },[depth])

  return (
    <div
      ref={stepRef}
      className={`recipe-sub-step ${className || ''}`}
      id={`step-${id}`}
    >
      {
        tree && tree
          .sort((a,z) => a.id - z.id)
          .map(node =>
          <RecipeChartNode
            key={node.id}
            id={node.id}
            verb={node.verb}
            ingredients={node.ingredients}
            tree={node.tree}
            depth={depth - 1}
          />
        )
      }
      <span className={`recipe-verb`} id={`action-${id}`}>{verb}</span>
      {
        ingredients && ingredients.map(ing => (
          <span className={`recipe-ingredient`} key={ing}>{ing}</span>
        ))
      }
    </div>
  )
}

RecipeChartNode.propTypes = {
  id: PropTypes.number,
  verb: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  tree: PropTypes.arrayOf(PropTypes.object),
  depth: PropTypes.number,
  className: PropTypes.string
}