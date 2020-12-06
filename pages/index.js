import React from "react"
// import SEO from "components/seo";
import Head from 'next/head'
import Hero from "../main-sections/hero/hero";

import AboutSection from "../main-sections/about/about-section";
// import PortfolioSection from "../main-sections/portfolio/portfolio-section";
import ResumeSection from "../main-sections/resume/resume-section";
// import BlogSection from "../main-sections/blog/blog-section";
// import FooterSection from "../main-sections/footer/footer-section";
// import ProjectsSection from "../main-sections/projects/projects-section";
// import QuoteSection from "../main-sections/QuoteSection/QuoteSection";

const IndexPage = () => {

  return (
    <main id="app">
      <Head>
        <title>Main</title>
        <meta name='Description' content='NYC based UX Engineer' />
      </Head>
      
      <Hero/>
      
      <AboutSection/>
      {/* <QuoteSection attribution="Jen Simmons @ Artifact 2019">A design is finished when the CSS is written</QuoteSection> */}
      <ResumeSection />
      {/* <ProjectsSection/> */}
      {/* <PortfolioSection/> */}
      {/* <BlogSection/> */}
      {/* <FooterSection/> */}
      
    </main>
)}

export default IndexPage