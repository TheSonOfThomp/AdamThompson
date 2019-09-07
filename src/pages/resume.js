import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import '../style/resume.scss'
import T from "../components/tool/tool"

const ResumePage = () => (
  <div className="resume-container">
    <SEO title="Resume" />
    <div className="resume-page">
      <div className="resume-header">
        <h1>Adam Thompson</h1>
        <div id="contacts">
          <a href="http://thesonofthomp.com" id="website">thesonofthomp.com</a>
          <a href="mailto:adam.m.thompson@icloud.com" id="email">adam.m.thompson@icloud.com</a>
          <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
        </div>
      </div>
      <div><i>
        Designer and developer seeking a role where I thrive—at the intersection of both design and engineering. My holistic design experience combined with technical aptitude allow me to excel in both diciplines. With experience in UX design since 2013, and a technical engineering background, I am the right choice for a technical designer.
      </i></div>
      <div id="resume-body">
        <div id="experience">
          {/* <h2>Experience</h2> */}

          <div className="job" id="uw">
            <div className="job-header">
              <h4>BASc. Systems Design Engineering</h4>
              <h3>University of Waterloo</h3>
            </div>
          </div>

          <div className="job" id="nv">
            <div className="job-header">
              <h3>UX Engineer</h3>
              <strong>New Visions for Public Schools</strong>
              <span className="location">July 2018 - Present | NYC</span>
            </div>
            <div className="job-bullets">
              <ul>
                <li>Pioneered design-system driven development to improve consistency throughout the app. This included building, and managing an <T>Angular</T> component library using <T>Storybook</T> and <T>Chromatic</T> in parallel with a <T>Sketch</T> library, writing UI pattern documentation, and fostering closer  collaboration between design and engineering.</li>
                <li>Developed a data model using <T>Airtable</T> to define how to render the dashboard UI in different use cases, such as how to render a graph, and what filter options are available for the given context.</li>
                <li>Architected, built and maintained a prototype <T>Vue</T> app, used to quickly design and test new components and interactions, and to fully design features that involve complex interactions or complex multi-step workflows.</li>
              </ul>
            </div>
          </div>

          <div className="job" id="music-group">
            <div className="job-header">
              <h3>Assistant Customer Solutions Manager</h3>
              <h4>TC Helicon</h4>
              <span className="location">2018 | Kitchener</span>
            </div>
            <div className="job-bullets">
              <ul>
                <li>Identified business opportunities and customer needs, and defined product specifications for the GO line of accessories and mobile music making products based on insights uncovered through market and customer research.</li>
                <li>Developed a process in <T>Excel</T> & VBA now used across the organization in 13 countries to allow managers to quickly evaluate products based on key data points.</li>
                <li>Collaborated closely with the director of product on process, product vision, business case development and customer centric strategies.</li>
              </ul>
            </div>
          </div>
          
          <div className="job" id="chameleon">
            <div className="job-header">
              <h3>Co-founder</h3>
              <h4>Chameleon Hearing Protection</h4>
              <span className="location">2016 - 2018 | Waterloo</span>
            </div>
            <div className="job-bullets">
              <ul>
                <li>Managed project requirements, and led development of mechanical, software and electronic systems.</li>
                <li>Researched needs and behaviours of industrial workers to inform user and technical requirements, and developed a business model and market strategy based on all stakeholder needs and expectations.</li>
                <li>Designed the mechanical noise-attenuation components using <T>Fusion</T> 360, designed the analog electronic filter circuit to measure the perceived loudness of noise at the ear, and architected <T>Arduino</T> code to control the mechanical actuator based on the loudness measurement.</li>
                <li>Developed device testing procedures based on NIH protocol and built analysis software in <T>Python</T> (NumPy) to determine the Noise Reduction Ratio (NRR) of the headset, and to predict daily noise exposure.</li>
              </ul>
            </div>
          </div>
        
          <div className="job" id="zynga">
            <div className="job-header">
              <h3>UX Product Manager Intern</h3>
              <h4>Zynga Poker</h4>
              <span className="location">2016 | Toronto</span>
            </div>
            <div>
              <ul>
                <li>Surveyed competitor business models, and performed secondary user research and A/B testing, with data analysis in <T>Excel</T> to determine feasibility and establish price points of a new subscription-based revenue model</li>
                <li>Identified an ideal user flow based on the results of multi-variate testing and configured final design parameters for a social engagement feature that increased daily news-feed app entry by 4%</li>
              </ul>
            </div>
          </div>

          <div className="job" id="noom">
            <div className="job-header">
              <h3>Product Design Intern</h3>
              <h4>Noom</h4>
              <span className="location">2015 | NYC</span>
            </div>
            <div>
              <ul>
                <li>Simplified the core food logging experience by modifying the information architecture to better fit the observed mental model, leveraging data from rigorously user tested <T>Sketch</T> and <T>Marvel</T> prototypes to inform further design iterations.</li>
              </ul>
            </div>
          </div>
        
          <div className="job" id="knowroaming">
            <div className="job-header">
              <h3>UX Design Intern</h3>
              <h4>KnowRoaming</h4>
              <span className="location">2014 - 2015 | Toronto</span>
            </div>
            <div>
              <ul>
                <li>Overhauled information architecture and UI design of the iOS and Android apps to conform to common user behaviours, making them simpler and more informative, as evidenced through user retention rates</li>
              </ul>
            </div>
          </div>
        
          <div className="job" id="sony">
            <div className="job-header">
              <h3>UI Design Intern</h3>
              <h4>Sony</h4>
              <span className="location">2013 | Waterloo</span>
            </div>
            <div>
              <ul>
                <li>Lead UI design and development for a new music discovery/radio feature in MediaGo, using <T>SASS</T> and <T>Javascript</T></li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <div className="resume-page"></div>
  </div>
)

export default ResumePage
