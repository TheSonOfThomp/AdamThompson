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

const IndexPage = () => {
  return (
    <main id="app">
      <SEO title="Main"/>
      
      <Hero/>
      
      <AboutSection/>

      {/* <hr/> */}

      <ProjectsSection/>

      {/* <hr/> */}
  
      <ResumeSection />

      {/* <hr/> */}

      <PortfolioSection/>
  
      {/* <Section title="Toolbox"/> */}
      {/* <hr/> */}
            
      <BlogSection/>

      <FooterSection/>
      
    </main>
)}

export default IndexPage