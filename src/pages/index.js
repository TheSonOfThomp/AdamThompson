import React from "react"
// import { Link } from "gatsby"

import SEO from "components/seo";
import Hero from "templates/sections/hero/hero";
import ResumeSection from "templates/sections/resume/resume-section";

import Section from "templates/section/section";
import 'style/global.sass';
import PortfolioSection from "../templates/sections/portfolio/portfolio-section";
import AboutSection from "../templates/sections/about/about-section";
import BlogSection from "../templates/sections/blog/blog-section";
import FooterSection from "../templates/sections/footer/footer-section";
class IndexPage extends React.Component {
  
  constructor(){
    super()
  }

  render() {
    return (
      <main id="app">
        <SEO title="Main" keywords={[`adam`, `thompson`, `react`]} />
        
        <Hero></Hero>
    
        <PortfolioSection></PortfolioSection>
    
        <AboutSection></AboutSection>
    
        {/* <ResumeSection></ResumeSection> */}
        
        {/* <Section title="Toolbox">
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
        </Section> */}
    
        {/* <BlogSection></BlogSection> */}
        
        <FooterSection></FooterSection>
        
      </main>
  )}
}

export default IndexPage