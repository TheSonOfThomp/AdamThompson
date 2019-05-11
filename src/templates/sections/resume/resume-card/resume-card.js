import React from "react"
import Card from "components/card/card";
import Img from "gatsby-image";
import './resume-card.scss';
import { useStaticQuery } from "gatsby";

const ResumeCard = ({id, logo, title, location, term, position, summary, bullets}) => {

  const imagePublicURLs = useStaticQuery(
    graphql`query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }`
  ).allFile.nodes

  const Logo = imagePublicURLs
    .find(img => `images/${img.relativePath}` === logo)

  const logoSrc = Logo ? Logo.publicURL : ''

  return (
    <Card 
      id={id}
      className={'resume-card'}
    >
        <div className="resume-header">
          <img className="logo" src={logoSrc} alt={title}/>
          {/* <h1 className="company">{title}</h1> */}
          <span className="time-and-place">{location} | {term}</span>
        </div>
        <h2 className="position">{position}</h2>
        <p className="summary">
          {summary}
        </p>
        {/* {bullets} */}
    </Card>
  )
}

export default ResumeCard
