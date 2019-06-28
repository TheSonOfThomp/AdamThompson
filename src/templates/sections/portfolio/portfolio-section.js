import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Section from "../../section/section";
import PortfolioCard from "../../../components/portfolio-card/portfolio-card";
import './portfolio-section.scss';

const PortfolioSection = ({ data }) => {
  const PortfolioQuery = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "portfolio" } } }
      )
      {
        nodes {
          id
          fields{
            slug
          }
          frontmatter {
            title
            tagline
            color
            cover
          }      
        }
      }
      allImageSharp {
        nodes {
          fixed {
            originalName
            src
          }
        }
      }
    }
  `)
  
  const imageSources = PortfolioQuery.allImageSharp.nodes.map(node => node.fixed)
  const posts = PortfolioQuery.allMarkdownRemark.nodes.map(node => {
    return {
      ...node,
      imageSource: imageSources.find(img => img.originalName === node.frontmatter.cover)
    }
  })

  return (
    <Section title="Case Studies" id="portfolio">
      {
        posts.map((post) => (
          <PortfolioCard
            key={post.id}
            title={post.frontmatter.title}
            tagline={post.frontmatter.tagline}
            color={post.frontmatter.color}
            cover={post.imageSource.src}
            link={post.fields.slug}
            imgSrc={post.imageSource.src}
          >
          </PortfolioCard>
        ))
      }
    </Section>
  )
}

export default PortfolioSection
