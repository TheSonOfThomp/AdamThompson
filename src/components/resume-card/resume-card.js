import React from "react"
import Card from "../card/card";
import Img from "gatsby-image"
import './resume-card.scss';
// import { useStaticQuery } from "gatsby";

const ResumeCard = ({id, data}) => {

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

  // const Logotype = imagePublicURLs
  //   .find(img => `images/${img.relativePath}` === data.logotype)
  // const Logo = imagePublicURLs
  //   .find(img => `images/${img.relativePath}` === data.logo)

  // const logoSrc = Logo ? Logo.publicURL : ''
  return (
    <Card 
      id={id}
      className={'resume-card'}
    >
        <div className="resume-header">
          {/* <img src={logoSrc} alt={data.company}/> */}
          <h1 className="company">{data.company}</h1>
          <span className="time-and-place">{data.location} | {data.term}</span>
        </div>
        <h2 className="position">{data.position}</h2>
        <p className="summary">
          {data.summary}
        </p>
    </Card>
  )
}

export default ResumeCard
