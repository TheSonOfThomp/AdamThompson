import React from "react"
import Section from "templates/section/section";

import { useStaticQuery, graphql } from 'gatsby';
// import './about-section.scss';

const AboutSection = ({ data }) => {
  const aboutQuery = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "About" } } }
      ) {
        nodes{
          html
        }
      }
    }
  `)
  const about = aboutQuery.allMarkdownRemark.nodes[0].html
  return (
    <Section title="About">
      <div dangerouslySetInnerHTML={{ __html: about }}></div>
    </Section>
  )
}

export default AboutSection
