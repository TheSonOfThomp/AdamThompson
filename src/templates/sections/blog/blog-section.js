import React from "react"
import Section from "templates/section/section";
import './blog-section.scss';
import { posts } from '../../../data/medium-posts.json';
import BlogPostLink from "./BlogPostLink/BlogPostLink";

const BlogSection = () => {
  return (
    <Section title="Writing" id="blog">
      {posts.map(post => {
        console.log(post)
        return (
          <BlogPostLink post={post}/>
        )
      })}
    </Section>
  )
}

export default BlogSection
