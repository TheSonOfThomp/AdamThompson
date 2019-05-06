import React from "react"
import Section from "templates/section/section";

import { useStaticQuery, graphql } from 'gatsby';
import './portfolio-section.scss';
import PortfolioCard from "./portfolio-card/portfolio-card";

const PortfolioSection = ({ data }) => {
  const PortfolioQuery = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "portfolio" } } }
      )
      {
        nodes{
          id
          fields{
            slug
          }
          frontmatter {
            title
            tagline
            color
          }      
        }
      }
    }
  `)
  const posts = PortfolioQuery.allMarkdownRemark.nodes
  console.log(posts.map(node => node.frontmatter))
  return (
    <Section title="Portfolio">
      {
        posts.filter(node => node.frontmatter).map((node) => (
          <PortfolioCard
            key={node.id}
            title={node.frontmatter.title}
            tagline={node.frontmatter.tagline}
            color={node.frontmatter.color}
            // cover={node.frontmatter.cover}
            link={node.fields.slug}
          >
          </PortfolioCard>
        ))
      }
    </Section>
  )
}

export default PortfolioSection

