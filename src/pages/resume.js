import React from "react"
import { Link, StaticQuery, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import monogram from '../images/monogram-green.svg';
import '../style/resume.scss'
import T from "../components/tool/tool"

const ResumePage = () => {
  
  return (
  <div className="resume-container">
    <SEO title="Resume" />
    <div className="resume-page">
      <div className="resume-header">
        <img id="monogram" src={monogram}></img>
        <h1>Adam Thompson</h1>
        <div id="contacts">
          <a href="http://thesonofthomp.com" id="website">thesonofthomp.com</a>
          <a href="mailto:adam.m.thompson@icloud.com" id="email">adam.m.thompson@icloud.com</a>
          <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
        </div>
      </div>
      <div><i>
        I'm a UX designer/developer seeking a role where I thrive—at the intersection of both design and engineering. With experience in UX design since 2013, and an engineering background, I am the right choice for a technical designer or UX engineer.
        {/* My holistic design experience, and technical education allow me to excel in both diciplines. */}
      </i></div>
      <div id="resume-body">
        <div id="experience">
          <div className="entry" id="nv">
            <div className="entry-header">
              <h3>UX Engineer</h3>
              <strong>New Visions for Public Schools</strong>
              <span className="location">July 2018 - now | NYC</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Pioneered design-system driven development to improve consistency throughout the app. This included building, and managing an <T>Angular</T> component library using <T>Storybook</T> and <T>Chromatic</T> in parallel with a <T>Sketch</T> library, writing UI pattern documentation, and fostering closer  collaboration between design and engineering.</li>
                <li>Developed a data model using <T>Airtable</T> to define how the dashboard UI should render in different use cases, such as how to render a graph, and what filter options are available for the given context.</li>
                <li>Architected, built and maintained a prototype <T>Vue</T> app, used to quickly design and test new components and interactions, and to fully design features that involve complex interactions or complex multi-step workflows.</li>
              </ul>
            </div>
          </div>

          <div className="entry" id="music-group">
            <div className="entry-header">
              <h3>Asst. Customer Solutions Manager</h3>
              <h4>TC Helicon</h4>
              <span className="location">2018 | Kitchener</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Collaborated closely with the director of product to identify business opportunities and customer needs, and defined product specifications and business cases for a new product line based on insights uncovered through market and customer research.</li>
                <li>Developed a process in <T>Excel</T> & VBA now used across the organization in 13 countries to allow managers to quickly evaluate products based on key data points.</li>
              </ul>
            </div>
          </div>
          
          <div className="entry" id="chameleon">
            <div className="entry-header">
              <h3>Co-founder</h3>
              <h4>Chameleon</h4>
              <span className="location">2016 - 2018 | Waterloo</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Researched user needs and behaviours to inform product requirements, and developed a business model and market strategy based on stakeholder needs and expectations.</li>
                <li>Led development of the mechanical noise-attenuation system using <T>Fusion</T> 360, designed the analog circuit to measure loudness at the ear, architected <T>Arduino</T> code to control the mechanical actuator, and built analysis software in <T>Python</T> (NumPy) to determine the Noise Reduction Ratio (NRR) of the headset.</li>
              </ul>
            </div>
          </div>
        
          <div className="entry" id="zynga">
            <div className="entry-header">
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

          <div className="entry" id="noom">
            <div className="entry-header">
              <h3>Product Design Intern</h3>
              <h4>Noom</h4>
              <span className="location">2015 | NYC</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Simplified the core food logging experience by modifying the information architecture to better fit the observed mental model, leveraging data from rigorously user tested <T>Sketch</T> and <T>Marvel</T> prototypes to inform further design iterations.</li>
              </ul>
            </div>
          </div>
        
          <div className="entry" id="knowroaming">
            <div className="entry-header">
              <h3>UX Design Intern</h3>
              <h4>KnowRoaming</h4>
              <span className="location">2014 - 2015 | Toronto</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Overhauled information architecture and UI of the mobile apps to conform to common user behaviours, making them simpler and more informative, shown through user retention rates. Apps designed and prototyped using <T>Sketch</T>, <T>Balsamiq</T> and <T>InVision</T></li>
              </ul>
            </div>
          </div>
        
          <div className="entry" id="sony">
            <div className="entry-header">
              <h3>UI Design Intern</h3>
              <h4>Sony</h4>
              <span className="location">2013 | Waterloo</span>
            </div>
            <div className="bullets">
              <ul>
                <li>Led UI design and development for a music discovery feature in MediaGo, using <T>SASS</T> and <T>Javascript</T></li>
              </ul>
            </div>
          </div>
        
        </div>
      
        <div id="right-column">
          <h1>Education</h1>
          <div className="entry" id="uw">
            <div className="entry-header">
              <a href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"><h3>Systems Design Engineering</h3></a>
              <h4>University of Waterloo</h4>
            </div>
            <div>
              <i>BASc. with Cognitive Science minor</i>
            </div>
          </div>
          <h1>Projects</h1>
          <div className="entry" id="zeplin-confluence">
            <div className="entry-header">
              <h3>Zeplin x Confluence</h3>
            </div>
            <div>
              <ul>
                <li>A Confluence plugin written in <T>Node</T>.js to place Zeplin images in a Confluence page</li>
              </ul>
            </div>
          </div>
          <div className="entry" id="react-synth">
            <div className="entry-header">
              <h3>React Synth</h3>
            </div>
            <div>
              <ul>
                <li>A web based synthesizer built using <T>React</T> and Tone.js.</li>
              </ul>
            </div>
          </div>
          <div className="entry" id="tap">
            <div className="entry-header">
              <h3>TAP Metronome</h3>
            </div>
            <div>
              <ul>
                <li>A metronome app with a minimal interface. Built in <T>Swift</T>.</li>
              </ul>
            </div>
          </div>
          <div className="entry" id="klypi">
            <div className="entry-header">
              <h3>Klypi</h3>
            </div>
            <div>
              <ul>
                <li>A Safari extension for clipping online comments directly to Airtable. Built in <T>Vue</T>.</li>
              </ul>
            </div>
          </div>
          <div className="entry" id="fourier">
            <div className="entry-header">
              <h3>Fourier Synth</h3>
            </div>
            <div>
              <ul>
                <li>A synthesizer built in <T>Python</T> based on the original Fourier synthesizer</li>
              </ul>
            </div>
          </div>
          <div className="entry" id="smrtwatr">
            <div className="entry-header">
              <h3>SMRT WATR</h3>
            </div>
            <div>
              <ul>
                <li>An interactive water fountain, and web-based game built using <T>Javascript</T> and a <T>Python</T> backend,  controlled using a <T>Raspberry Pi</T> and <T>Arduino</T>.</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div className="resume-page"></div>
  </div>
)}

export default ResumePage
