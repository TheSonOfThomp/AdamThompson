import React from "react"
import Card from "../card/card";
import './portfolio-card.scss';
import { Link } from "gatsby";

import { mix } from "chroma-js";

function getGradientColorObject(color = 'black') {
  const startColor = mix('white', color, 0.9)
  const endColor = color;
  const lightColor = mix('white', color, 0.05);
  return {
    /* Light */
    // color: color,
    // background: lightColor, /* Old browsers */
    
    /* Dark */
    /* eslint-disable */
    background: `-moz-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* FF3.6+ */
    background: `-webkit-gradient(linear, top left, bottom right, color-stop(0%, ${startColor}), color-stop(100%, ${color}))`, /* Chrome,Safari4+ */
    background: `-webkit-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* Chrome10+,Safari5.1+ */
    background: `-o-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* Opera 11.10+ */
    background: `-ms-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* IE10+ */
    background: `linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)` /* W3C */
  }
  
}

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {
  return (
  <Link to={link}>
    <Card 
      style={getGradientColorObject(color)}
      className="portfolio-card clickable"
      id={title.toLowerCase()}
    >
      <div>
        <h2>{title}</h2>
        <span>{tagline}</span>
      </div>
        <img src={imgSrc} alt={title}/>
    </Card>
  </Link>
  )
}

export default PortfolioCard
