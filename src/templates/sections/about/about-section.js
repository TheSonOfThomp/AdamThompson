import React from "react"
import Section from "../../../templates/section/section";

import { useStaticQuery, graphql } from 'gatsby';
import './about-section.scss';
// import portraitImage from 'images/Adam_web.jpg';

const AboutSection = ({ data }) => {
  const aboutQuery = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "About" } } }
      ) {
        nodes {
          html
        }
      }
    }
  `)
  const about = aboutQuery.allMarkdownRemark.nodes[0].html
  return (
    <Section title="About" className="green-divider">
      <span className="about-text" dangerouslySetInnerHTML={{ __html: about }}></span>
    </Section>
  )
}

export default AboutSection
