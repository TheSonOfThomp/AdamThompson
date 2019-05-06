// import PropTypes from "prop-types"
import React from "react"
import './card.scss';

const Card = ({id, style, children}) => (
  <div 
    id={id}
    style={style}
    className="card">
    {children}
  </div>

);

export default Card