import React from "react"

;

import Section from "../../templates/section/section";
import PortfolioCard from "./portfolio-card/portfolio-card";
import styles from './portfolio-section.module.scss';

const PortfolioSection = ({ data }) => {
  const portfolioPages = useStaticQuery(graphql`
    query{
      allSitePage(filter: {path: {regex: "/portfolio/"}}, sort: {fields: context___frontmatter___date, order: DESC}) {
        nodes {
          path
          context {
            frontmatter {
              date
              title
              color
              tagline
              cover
            }
          }
        }
      }
      allImageSharp(filter: {fluid: {originalName: {regex: "/cover/"}}}) {
        nodes {
          fluid {
            originalName
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
  `)
  
  const imageSources = portfolioPages.allImageSharp.nodes.map(node => node.fluid)
  const posts = portfolioPages.allSitePage.nodes.map(node => {
    return {
      ...node,
      imageSource: imageSources.find(img => img.originalName === node.context.frontmatter.cover)
    }
  })

  return (
    <Section title="UX Case Studies" id="portfolio">
      <div className={styles.portfolio_cards_container}>
      {
        posts.map((post) => (
          <PortfolioCard
            key={post.context.frontmatter.title}
            title={post.context.frontmatter.title}
            tagline={post.context.frontmatter.tagline}
            color={post.context.frontmatter.color}
            cover={post.imageSource.src}
            link={post.path}
            imgSrc={post.imageSource}
          >
          </PortfolioCard>
        ))
      }
      </div>
    </Section>
  )
}

export default PortfolioSection
