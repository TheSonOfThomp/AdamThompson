import React from "react"
import Head from "next/head"
import Hero from "../main-sections/hero/hero"

import AboutSection from "../main-sections/about/about-section"
import PortfolioSection from "../main-sections/portfolio/portfolio-section"
import ResumeSection from "../main-sections/resume/resume-section"
import BlogSection from "../main-sections/blog/blog-section"
import ProjectsSection from "../main-sections/projects/projects-section"
import FooterSection from "../main-sections/footer/footer-section"
import QuoteSection from "../main-sections/QuoteSection/QuoteSection"
import Markdown from "markdown-to-jsx"
import Section from "../templates/section/section"
import { Quote } from "../components/Quote"

const IndexPage = ({ projects, resumeJson, portfolioMeta, blogPosts }) => {
  return (
    <main id="app">
      <Head>
        <title>Adam Thompson</title>
        <meta name="Description" content="NYC based UX Engineer" />
      </Head>

      <Hero />

      {/* <AboutSection /> */}

      <Section id="about">
        <Quote
          quote={"I'm a software engineer with a focus on user experience"}
        />
        <Markdown options={{ forceBlock: true }}>
          Currently [building design systems](https://mongodb.design) at
          MongoDB, I have experience in UX since 2013, and an education in
          [Systems Design
          Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering).
          I approach problems holistically, design complete solutions, and
          execute them efficiently.
        </Markdown>
      </Section>

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
