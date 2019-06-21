import React from "react"
import Card from "../card/card";
import './portfolio-card.scss';
import { Link } from "gatsby";

import { mix } from "chroma-js";

function getGradientColorObject(color) {
  const startColor = mix('white', color, 0.9)
  const endColor = color;
  const lightColor = mix('white', color, 0.05);
  return {
    color: color, /* Old browsers */

    background: lightColor, /* Old browsers */
    // background: `-moz-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* FF3.6+ */
    // background: `-webkit-gradient(linear, top left, bottom right, color-stop(0%, ${startColor}), color-stop(100%, ${color}))`, /* Chrome,Safari4+ */
    // background: `-webkit-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* Chrome10+,Safari5.1+ */
    // background: `-o-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* Opera 11.10+ */
    // background: `-ms-linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)`, /* IE10+ */
    // background: `linear-gradient(to bottom right,  ${startColor} 0%, ${color} 100%)` /* W3C */
  }
  
}

const PortfolioCard = ({ title, tagline, color, cover, link }) => {
  // const imagePublicURLs = useStaticQuery(
  //   graphql`query {
  //     allFile(filter: { sourceInstanceName: { eq: "images" } }) {
  //       nodes {
  //         relativePath
  //         publicURL
  //       }
  //     }
  //   }`
  // ).allFile.nodes

  // const Image = imagePublicURLs
  // .find(img => `${img.relativePath}` === cover)
  
  // const imgSrc = Image ? Image.publicURL : ''
  // console.log(Image, imgSrc)
  return (
  <Link to={link}>
    <Card 
      style={getGradientColorObject(color)}
      className="portfolio-card"
      id={title.toLowerCase()}
    >
      <div>
        <h2>{title}</h2>
        <p>{tagline}</p>
      </div>
      <img src={imgSrc}/>
    </Card>
  </Link>
  )
}

export default PortfolioCard
