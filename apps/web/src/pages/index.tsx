import React from "react"
import Head from "next/head"
import Hero from "../main-sections/hero/hero"

import AboutSection from "../main-sections/about/about-section"
import FooterSection from "../main-sections/footer/footer-section"
import { getNotionBlogPosts } from "../utilities/notion/notion"
import BlogSection from '../main-sections/blog/blog-section'
import { BlogPost } from '../types/BlogPost.types'

const MAX_BLOG_POSTS = 3;

const IndexPage = ({ projects, resumeJson, portfolioMeta, allBlogPosts }) => {

  const parsedBlogPosts = JSON.parse(allBlogPosts);
  console.log('Parsed Blog Posts:', parsedBlogPosts);

  return (
    <main id="app">
      <Head>
        <title>Adam Thompson</title>
        <meta name="Description" content="NYC based UX Engineer" />
      </Head>

      <Hero />

      <AboutSection />

      {/* <ResumeSection resume={JSON.parse(resumeJson)} /> */}
      {/* <PortfolioSection meta={JSON.parse(portfolioMeta)} /> */}
      {/* <ProjectsSection projects={JSON.parse(projects)} /> */}
      <BlogSection posts={JSON.parse(allBlogPosts)} />
      <FooterSection />
    </main>
  )
}

export default IndexPage

export async function getServerSideProps() {
  const projects = JSON.stringify(
    (await import("../data/projects.json")).projects
  )
  const portfolioMeta = JSON.stringify(
    (await import("../meta/portfolio-meta")).default
  )
  const resumeJson = JSON.stringify(await import("../data/resume-full.json"))

  const mediumPosts: Array<BlogPost> = (await import("../data/medium-posts.json")).posts
  
  // Use the Netlify function for Notion blog posts
  let notionBlogPages: Array<BlogPost> = [];
  try {
    notionBlogPages = await getNotionBlogPosts();
  } catch (error) {
    console.error('Failed to fetch Notion blog posts:', error);
    // Continue without Notion posts
  }
  
  const allBlogPosts = JSON.stringify(
    [...mediumPosts, ...notionBlogPages]
      .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
      .slice(0, MAX_BLOG_POSTS)
  );

  return {
    props: {
      projects,
      resumeJson,
      allBlogPosts,
      portfolioMeta,
    },
  }
}
