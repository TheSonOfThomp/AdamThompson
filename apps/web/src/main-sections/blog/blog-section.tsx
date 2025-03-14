import React from "react"
import Section from "../../templates/section/section";
import BlogPostLink from "./BlogPostLink/BlogPostLink";
import styles from './blog-section.module.scss';

const BlogSection = ({ posts }) => {

  return (
    <Section className={styles.section} title="Writing" id="blog">
      {posts.map(post => {
        return (
          <BlogPostLink post={post} key={post.title}/>
        )
      })}
    </Section>
  )
}

export default BlogSection
