import React from "react"
import Head from "next/head"
import Hero from "../main-sections/hero/hero"

import AboutSection from "../main-sections/about/about-section"
import FooterSection from "../main-sections/footer/footer-section"
import { getNotionBlogPosts } from "../utilities/notion/notionClient"
import BlogSection from '../main-sections/blog/blog-section'
import { BlogPost } from '../types/BlogPost.types'

const MAX_BLOG_POSTS = 3;

const IndexPage = ({ projects, resumeJson, portfolioMeta, allBlogPosts }) => {

  const parsedBlogPosts = JSON.parse(allBlogPosts);

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

export async function getStaticProps() {
  const projects = JSON.stringify(
    (await import("../data/projects.json")).projects
  )
    const portfolioMeta = JSON.stringify(
    (await import("../meta/portfolio-meta")).default
  )
  const resumeJson = JSON.stringify(await import("../data/resume-full.json"))

  const mediumPosts: Array<BlogPost> = (await import("../data/medium-posts.json")).posts
  const notionBlogPages = await getNotionBlogPosts();
  
  // Map Notion blog posts to match BlogPost interface
  const mappedNotionPosts: Array<BlogPost> = notionBlogPages.map((post: any) => ({
    ...post,
    datePublished: post.publishedDate || new Date().toISOString(),
    description: post.excerpt || '',
  }));
  
  const allBlogPosts = JSON.stringify(
    [...mediumPosts, ...mappedNotionPosts]
      .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
      .slice(0, MAX_BLOG_POSTS)
  );

  console.log(`Fetched ${JSON.parse(allBlogPosts).length} blog posts`);

  return {
    props: {
      projects,
      resumeJson,
      allBlogPosts,
      portfolioMeta,
    },
  }
}
