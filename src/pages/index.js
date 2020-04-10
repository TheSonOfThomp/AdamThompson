import React from "react"
// import { Link } from "gatsby"

import SEO from "components/seo";
import Hero from "templates/sections/hero/hero";
import ResumeSection from "templates/sections/resume/resume-section";

// import Section from "templates/section/section";
import 'style/global.sass';
import PortfolioSection from "../templates/sections/portfolio/portfolio-section";
import AboutSection from "../templates/sections/about/about-section";
import BlogSection from "../templates/sections/blog/blog-section";
import FooterSection from "../templates/sections/footer/footer-section";
import ProjectsSection from "../templates/sections/projects/projects-section";
import image from '../images/monogram.png'
import '../style/global.sass'
class IndexPage extends React.Component {
  render() {
    return (
      <main id="app">
        <SEO title="Main" image={image}/>
        
        <Hero></Hero>
    
        <PortfolioSection></PortfolioSection>
    
        <AboutSection></AboutSection>
    
        {/* <Section title="Toolbox"></Section> */}
        
        <ProjectsSection></ProjectsSection>

        <ResumeSection></ResumeSection>
        
        <BlogSection></BlogSection>

        <FooterSection></FooterSection>
        
      </main>
  )}
}

export default IndexPage