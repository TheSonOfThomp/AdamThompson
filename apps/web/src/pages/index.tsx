import React from "react"
import Head from "next/head"
import Hero from "../main-sections/hero/hero"

import AboutSection from "../main-sections/about/about-section"
import FooterSection from "../main-sections/footer/footer-section"

const IndexPage = ({ projects, resumeJson, portfolioMeta, blogPosts }) => {
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
      {/* <BlogSection posts={JSON.parse(blogPosts)} /> */}
      <FooterSection />
    </main>
  )
}

export default IndexPage

export async function getStaticProps() {
  const projects = JSON.stringify(
    (await import("../data/projects.json")).projects
  )
  const resumeJson = JSON.stringify(await import("../data/resume-full.json"))
  const blogPosts = JSON.stringify(
    (await import("../data/medium-posts.json")).posts
  )
  const portfolioMeta = JSON.stringify(
    (await import("../meta/portfolio-meta")).default
  )

  return {
    props: {
      projects,
      resumeJson,
      blogPosts,
      portfolioMeta,
    },
  }
}
