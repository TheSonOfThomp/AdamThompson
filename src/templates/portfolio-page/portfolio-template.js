import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "components/seo";
import './portfolio-template.scss';
import { PortfolioPageHeader } from "../../components/portfolio-page-header/porfolio-page-header";

export default ({data}) => {
  const post = data.markdownRemark
  const allPosts = data.allMarkdownRemark.nodes
  const postIndex = allPosts.findIndex(p => p.id == post.id)
  const nextPost = allPosts[postIndex + 1]
  const prevPost = allPosts[postIndex - 1]

  const prevLink = prevPost ? prevPost.fields.slug : '/'
  const prevLabel = prevPost ? prevPost.frontmatter.title : 'Home'

  const nextLink = nextPost ? nextPost.fields.slug : '/'
  const nextLabel = nextPost ? nextPost.frontmatter.title : 'Home'
  
  return (
    <main className="portfolio" id={post.frontmatter.title.toLowerCase().replace(' ', '')}>
      <SEO title="Portfolio" keywords={[`adam`, `thompson`, `react`]} />
      <PortfolioPageHeader/>
      <div 
        className="portfolio-content"  
        dangerouslySetInnerHTML={{ __html: post.html }} />

      <Link to={prevLink} className={`${prevLabel.replace(' ', '').toLowerCase()} quick-link`} id="prev-link">
        <div>Previous</div>
        <span>{prevLabel}</span>
      </Link>
      <Link to={nextLink} className={`${nextLabel.replace(' ', '').toLowerCase()} quick-link`} id="next-link">
        <div>Next</div>
        <span>{nextLabel}</span>
      </Link>
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        color
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