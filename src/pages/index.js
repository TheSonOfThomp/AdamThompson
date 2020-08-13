import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo";
import Hero from "../sections/hero/hero";
import ResumeSection from "../sections/resume/resume-section";

import PortfolioSection from "../sections/portfolio/portfolio-section";
import AboutSection from "../sections/about/about-section";
import BlogSection from "../sections/blog/blog-section";
import FooterSection from "../sections/footer/footer-section";
import ProjectsSection from "../sections/projects/projects-section";
import image from '../images/monogram.png'
import '../style/global.sass'
class IndexPage extends React.Component {
  render() {
    return (
      <main id="app">
        <SEO title="Main" image={image}/>
        
        <Hero/>
        
        <ProjectsSection/>
    
        <AboutSection/>

        <PortfolioSection/>
    
        {/* <Section title="Toolbox"/> */}
        
        <ResumeSection/>
        
        <BlogSection/>

        <FooterSection/>
        
      </main>
  )}
}

export default IndexPage