import React, { useEffect, useState } from 'react';
import { Recipe as TRecipe} from '@thesonofthomp/recipe-parser'
// @ts-ignore
import { usePrevious } from '../../../hooks/usePrevious';
import styles from './RecipeList.module.scss';

type RecipeListProps = {
  json?: TRecipe
}
const RecipeList = ({json}:RecipeListProps) => {

  // Recipe ingredients list 
  const [highlightedElement, setHighlightedElement] = useState<Element | null>()
  const prevElement = usePrevious(highlightedElement)
  const listRef = React.useRef<any>()

  const handleIngredientMouseOver = (stepRef: number) => {
    setHighlightedElement(document.querySelector(`#steps-list-${stepRef - 1}`))
  }
  const handleIngredientMouseOut = () => {
    setHighlightedElement(null)
  }

  useEffect(() => {
    highlightedElement?.classList.add('highlight')
    prevElement?.classList.remove('highlight')
  }, [highlightedElement, prevElement])
  
  return (
    <ol ref={listRef} className={styles.recipe_steps_list}>
      {
        json?.steps.map((step, i) => {
          return (
          <li className={styles.recipe_steps_list_step} id={`steps-list-${i}`} key={`step-${i}`}>
            <b className={styles.recipe_steps_list_verb}>{step.verb} </b>
            {
              step.ingredients.map((ing: string) => {
                const stepRef = ing.search('#') === 0 ? parseInt(ing.slice(1)) : null
                if (stepRef) {
                  ing = ing.replace('#', 'Step ')
                  return <span
                    onMouseOver={() => { handleIngredientMouseOver(stepRef) }}
                    onMouseOut={handleIngredientMouseOut}
                    className={classnames(styles.recipe_steps-list-ingredient, styles.recipe_steps-list-ingredient-ref)}
                    key={ing}>{ing}</span>
                } else {
                  return <span className={styles.recipe_steps_list_ingredient} key={ing}>{ing}</span>
                }
              })
            }
          </li>)
        })
      }
    </ol>
  )
}

export default RecipeList;
