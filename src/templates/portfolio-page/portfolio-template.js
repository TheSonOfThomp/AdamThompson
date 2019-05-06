import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo";

export default ({data}) => {
  const post = data.markdownRemark
  return (
  <main className="portfolio">
    <SEO title="Portfolio" keywords={[`adam`, `thompson`, `react`]} />
    <h2>Blog post</h2>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`