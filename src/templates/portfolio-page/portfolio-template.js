import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo";
import './portfolio-template.scss';

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <main className="portfolio">
      <SEO title="Portfolio" keywords={[`adam`, `thompson`, `react`]} />
      <header>LOGO GOES HERE</header>
      <div 
        className="portfolio-content"  
        id={post.frontmatter.title.toLowerCase()}
        style={{color: post.frontmatter.color}}
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