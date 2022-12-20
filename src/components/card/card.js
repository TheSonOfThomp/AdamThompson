// import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"
import styles from './card.module.scss';

export const Card = ({id, className, style, as = 'div', children, ...rest}) => {

  const Component = ['a', 'button', 'div', 'span'].includes(as) ? as : 'div'
  const cardClass = ['a', 'button'].includes(Component) ? styles.clickableCard : styles.card

  return (
    <Component 
      id={id}
      style={style}
      className={ 
        classnames(cardClass, className)
      }
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Card
