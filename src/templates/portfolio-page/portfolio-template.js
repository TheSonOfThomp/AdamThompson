import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/seo";
import PortfolioQuickLink from "./portfolio-quick-link/portfolio-quick-link";
import './portfolio-template.scss';
import { PortfolioPageHeader } from "./portfolio-page-header/portfolio-page-header";
import { useCustomProps } from "../../hooks/useCustomProperty";


export default ({ pageContext, children }) => {
  const pageId = pageContext.frontmatter.title.replace(' ', '').toLowerCase()
  
  // Get all the other sites so we know where to link to with Quick Links
  const { allSitePage } = useStaticQuery(graphql`
    {
      allSitePage(filter: {path: {regex: "/portfolio/"}}, sort: {fields: context___frontmatter___date, order: DESC}) {
        nodes {
          path
          context {
            frontmatter {
              date
              title
              color
            }
          }
        }
      }
    }
  `)

  const frontmatter = pageContext.node ? pageContext.node.frontmatter : pageContext.frontmatter
  const thisPageIndex = allSitePage.nodes.findIndex(node => node.path.includes(pageId))
  const prevPage = allSitePage.nodes[thisPageIndex - 1] || null
  const nextPage = allSitePage.nodes[thisPageIndex + 1] || null
  
  const brand = frontmatter.title.toLowerCase().replace(' ', '');

  const mainRef = useCustomProps({
    '--brand-color': `var(--color-${brand})`,
    '--brand-color-light': `var(--color-${brand}-light)`,
    '--brand-color-lightest': `var(--color-${brand}-lightest)`,
  }) 

  return (
    <main ref={mainRef} className="portfolio" id={brand}>
      <SEO title="Portfolio" />
      <PortfolioPageHeader />
      <div className="portfolio-content-container">
        {pageContext.node // If we want to use gatsby-node created pages
          ? <div 
              className="portfolio-content"  
              dangerouslySetInnerHTML={{ __html: pageContext.node.html }} 
            ></div>
          : <div className="portfolio-content">{children}</div>
        }
      </div>
      <div className="quick-links-container">
        <PortfolioQuickLink to={prevPage} direction="prev"></PortfolioQuickLink>
        <PortfolioQuickLink to={nextPage} direction="next"></PortfolioQuickLink>
      </div>
    </main>
  )
}
