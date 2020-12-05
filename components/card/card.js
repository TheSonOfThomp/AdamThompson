// import PropTypes from "prop-types"
import React from "react"
import styles from './card.module.scss';

const Card = ({id, className, style, children}) => (
  <div 
    id={id}
    style={style}
    className={className + ' card'}>
    {children}
  </div>
);

export default Card