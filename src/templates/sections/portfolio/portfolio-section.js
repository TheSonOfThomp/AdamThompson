import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Section from "../../section/section";
import PortfolioCard from "../../../components/portfolio-card/portfolio-card";
import './portfolio-section.scss';

const PortfolioSection = ({ data }) => {
  const PortfolioQuery = useStaticQuery(graphql`
    {
      allSitePage(filter: {path: {regex: "/portfolio/"}}, sort: {fields: context___frontmatter___date, order: DESC}) {
        nodes {
          path
          context {
            frontmatter {
              date
              title
              color
              cover
              tagline
            }
          }
        }
      }
      allImageSharp(filter: {fluid: {originalName: {regex: "/cover/"}}}) {
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
  const posts = PortfolioQuery.allSitePage.nodes.map(node => {
    return {
      ...node,
      imageSource: imageSources.find(img => img.originalName === node.context.frontmatter.cover)
    }
  })
  
  debugger;

  return (
    <Section title="Case Studies" id="portfolio">
      <div className="portfolio-cards-container">
      {
        posts.map((post) => (
          <PortfolioCard
            key={post.id}
            title={post.context.frontmatter.title}
            tagline={post.context.frontmatter.tagline}
            color={post.context.frontmatter.color}
            cover={post.imageSource.src}
            link={post.path}
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
