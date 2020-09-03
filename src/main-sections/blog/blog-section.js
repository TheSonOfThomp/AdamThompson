import React from "react"
import Section from "../../templates/section/section";
import { posts } from '../../data/medium-posts.json';
import BlogPostLink from "./BlogPostLink/BlogPostLink";
import './blog-section.scss';

const BlogSection = () => {

  const [postsState, setPostsState] = React.useState(posts.slice(0,4))

  return (
    <Section title="Writing" id="blog">
      {postsState.map(post => {
        return (
          <BlogPostLink post={post} key={post.title}/>
        )
      })}
      {/* <button id="show-all-posts">Show all</button> */}
    </Section>
  )
}

export default BlogSection
