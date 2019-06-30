import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo";
import './portfolio-template.scss';
import { PortfolioPageHeader } from "../../components/portfolio-page-header/porfolio-page-header";

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <main className="portfolio" id={post.frontmatter.title.toLowerCase().replace(' ', '')}>
      <SEO title="Portfolio" keywords={[`adam`, `thompson`, `react`]} />
      <PortfolioPageHeader/>
      <div 
        className="portfolio-content"  
        dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        color
      }
    }
  }
`