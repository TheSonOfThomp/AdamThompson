import React from "react"
import Section from "../../../templates/section/section";
import { posts } from '../../../data/medium-posts.json';
import BlogPostLink from "./BlogPostLink/BlogPostLink";
import './blog-section.scss';

const BlogSection = () => {
  return (
    <Section title="Writing" id="blog">
      {posts.map(post => {
        return (
          <BlogPostLink post={post}/>
        )
      })}
    </Section>
  )
}

export default BlogSection
