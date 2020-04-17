import React from "react"
import SEO from "components/seo";
import './portfolio-template.scss';
import { PortfolioPageHeader } from "../../components/portfolio-page-header/porfolio-page-header";
// import PortfolioQuickLink from "./portfolio-quick-link/portfolio-quick-link";

export default ({ pageContext, children }) => {
  const frontmatter = pageContext.node ? pageContext.node.frontmatter : pageContext.frontmatter
  return (
    <main className="portfolio" id={frontmatter.title.toLowerCase().replace(' ', '')}>
      <SEO title="Portfolio" />
      <PortfolioPageHeader/>
      <div className="portfolio-content-container">
        {pageContext.node 
          ? <div 
              className="portfolio-content"  
              dangerouslySetInnerHTML={{ __html: pageContext.node.html }} 
            ></div>
          : <div className="portfolio-content">{children}</div>
        }
      </div>
      {/* <div className="quick-links-container">
        <PortfolioQuickLink post={pageContext.prevNode} direction="prev"></PortfolioQuickLink>
        <PortfolioQuickLink post={pageContext.nextNode} direction="next"></PortfolioQuickLink>
      </div> */}
    </main>
  )
}
