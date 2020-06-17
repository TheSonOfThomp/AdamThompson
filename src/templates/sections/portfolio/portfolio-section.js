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
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      )
      {
        nodes {
          id
          fields{
            slug
          }
          frontmatter {
            title
            date
            tagline
            color
            cover
          }      
        }
      }
      allImageSharp {
        nodes {
          fluid {
            originalName
            src
          }
        }
      }
    }
  `)
  
  const imageSources = PortfolioQuery.allImageSharp.nodes.map(node => node.fluid)
  const posts = PortfolioQuery.allMarkdownRemark.nodes.map(node => {
    return {
      ...node,
      imageSource: imageSources.find(img => img.originalName === node.frontmatter.cover)
    }
  })

  return (
    <Section title="UX Case Studies" id="portfolio">
      <div className="portfolio-cards-container">
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
      </div>
    </Section>
  )
}

export default PortfolioSection
