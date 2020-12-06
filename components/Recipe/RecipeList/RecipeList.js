import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import classnames from "classnames"
import { usePrevious } from '../../../hooks/usePrevious';
import styles from './RecipeList.module.scss';


const RecipeList = ({json}) => {

  // Recipe ingredients list 
  const [highlightedElement, setHighlightedElement] = useState()
  const prevElement = usePrevious(highlightedElement)
  const listRef = React.useRef()

  const handleIngredientMouseOver = (stepRef) => {
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
              step.ingredients.map((ing) => {
                const stepRef = ing.search('#') === 0 ? parseInt(ing.slice(1)) : null
                if (stepRef) {
                  ing = ing.replace('#', 'Step ')
                  return <span
                    onMouseOver={() => { handleIngredientMouseOver(stepRef) }}
                    onMouseOut={handleIngredientMouseOut}
                    className={classnames(styles.recipe_steps_list_ingredient, styles.recipe_steps_list_ingredient_ref)}
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

RecipeList.propTypes = {
  json: PropTypes.object
}

export default RecipeList;
