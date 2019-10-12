import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo";
import './portfolio-template.scss';
import { PortfolioPageHeader } from "../../components/portfolio-page-header/porfolio-page-header";
import PortfolioQuickLink from "./portfolio-quick-link/portfolio-quick-link";

export default ({data}) => {
  const post = data.markdownRemark
  const allPosts = data.allMarkdownRemark.nodes
  const postIndex = allPosts.findIndex(p => p.id === post.id)
  const nextPost = allPosts[postIndex + 1]
  const prevPost = allPosts[postIndex - 1]
  
  return (
    <main className="portfolio" id={post.frontmatter.title.toLowerCase().replace(' ', '')}>
      <SEO title="Portfolio" keywords={[`adam`, `thompson`, `react`]} />
      <PortfolioPageHeader/>
      <div className="portfolio-content-container">
        <div 
          className="portfolio-content"  
          dangerouslySetInnerHTML={{ __html: post.html }} 
        ></div>
      </div>

      <PortfolioQuickLink post={prevPost} direction="prev"></PortfolioQuickLink>
      <PortfolioQuickLink post={nextPost} direction="next"></PortfolioQuickLink>
      
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        color
        date
      }
    }
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
        }      
      }
    }
  }
`