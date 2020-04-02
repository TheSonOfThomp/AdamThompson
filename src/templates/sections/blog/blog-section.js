import React from "react"
import Section from "templates/section/section";
import './blog-section.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const posts = [
  {
    url: 'https://medium.com/@TheSonOfThomp/the-point-of-prototyping-4bff450dc659',
    title: 'The Power of Prototyping',
    date: 'Jan 2, 2020'
  },
  {
    url: 'https://medium.com/@TheSonOfThomp/leaving-artifact-behind-ea0673752976',
    title: 'Leaving Artifact Behind',
    date: 'Oct 3, 2019'
  }, 
  {
    url: 'https://medium.com/@TheSonOfThomp/the-ux-trade-off-of-faceid-b5eb2d6beed0',
    title: 'The UX trade-off of Face ID',
    date: 'Sep 13, 2017'
  },
]

const BlogSection = () => {
  return (
    <Section title="Blog">
      {posts.map(post => {
        return (
          <>
          <a href={post.url} className="blog-post">
            <h2>{post.title}</h2>
            <span>{post.date}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <br/>
          </>
        )
      })}
    </Section>
  )
}

export default BlogSection
