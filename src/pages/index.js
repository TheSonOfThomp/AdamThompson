import React from "react"

import SEO from "../components/seo";
import Hero from "../main-sections/hero/hero";
import ResumeSection from "../main-sections/resume/resume-section";
import PortfolioSection from "../main-sections/portfolio/portfolio-section";
import AboutSection from "../main-sections/about/about-section";
import BlogSection from "../main-sections/blog/blog-section";
import FooterSection from "../main-sections/footer/footer-section";
import ProjectsSection from "../main-sections/projects/projects-section";
import '../style/global.scss'
import { useVH } from "../hooks/useVH";
import QuoteSection from "../main-sections/QuoteSection/QuoteSection";

const IndexPage = () => {

  // useVH()

  return (
    <main id="app">
      <SEO title="Main"/>
      
      <Hero/>
      
      <AboutSection/>
      {/* <QuoteSection attribution="Jen Simmons @ Artifact 2019">A design is finished when the CSS is written</QuoteSection> */}
      <ResumeSection />
      <ProjectsSection/>
      <PortfolioSection/>
      <BlogSection/>
      <FooterSection/>
      
    </main>
)}

export default IndexPage