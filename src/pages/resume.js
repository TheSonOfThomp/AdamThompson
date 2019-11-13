import React from "react"
import Recaptcha from 'react-recaptcha';
import SEO from "../components/seo"
import '../style/resume.scss'
import T from "../components/Resume/tool/tool"
import ResumeHeader from "../components/Resume/resume-header";
import ResumeEntry from "../components/Resume/resume-entry/resume-entry";

class ResumePage extends React.Component {

  constructor(){
    super()
    this.shouldRenderResume = true;
  }

  captchaCallback = (e) => {
    console.log('callback')
    this.shouldRenderResume = true
    this.forceUpdate()
  }

   _ReCaptchaJSX = (
     <div className="captcha-container">
       <SEO title="Resume" />
      <Recaptcha
        sitekey="6Lf6KMAUAAAAAD75Sy3-rxa32S9v8tl6kYMZNZQ5"
        render="explicit"
        verifyCallback={this.captchaCallback}
      />
     </div>
    // <button onClick={this.captchaCallback}>I am not a robot</button>
  )

  _ResumeJSX = (
    <div className="resume-container">
      <SEO title="Resume" />
      <div className="resume-page" id="page-1">
        <ResumeHeader/>
        <div className="resume-body">
        <div className="blurb">
          I'm a UX engineer and designer looking for a role at the intersection of the two. With an engineering education, and experience in UX since 2013, I'm a perfect fit for a UX engineer or technical designer.
        </div>
          <div className="column" id="column-left">
            <div className="column-section " id="experience">
              <h2>Experience</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  title="UX Engineer"
                  company="New Visions for Public Schools"
                  location="July 2018 - now | NYC"
                  bullets={[
                      "Managed and led contributions to the design system component library and documentation, and led cross-team collaboration.",
                      "Architected and built infrastructure for quickly prototyping designs and testing new features and interactions.",
                      "Designed, prototyped, and tested numerous features, and developed a data model to define dashboard UI logic."
                    ]}
                />
                <ResumeEntry
                  title="Product Manager"
                  company="TC Helicon"
                  location="2018 | Kitchener"
                  bullets={[
                      "Identified customer needs, and defined business strategy and product specifications based on market and customer research.",
                      "Developed an ROI calculation tool, now used globally to allow managers to quickly evaluate new projects based on key data."
                    ]}
                />

                <ResumeEntry
                  title="UX Product Manager"
                  company="Zynga Poker"
                  location="2016 | Toronto"
                  bullets={[
                      "Perfected user flows based on the results of multi-variate testing, and configured final design parameters for a social engagement feature.",
                      "Performed secondary user research and A/B testing to define pricing for a new subscription-based revenue model."
                    ]}
                />

                <ResumeEntry
                  title="Product Designer"
                  company="Noom"
                  location="2015 | NYC"
                  bullets={[
                      "Simplified the core food logging experience by modifying the information architecture to better fit the mental model observed during user interviews."
                    ]}
                />

                <ResumeEntry
                  title="UX Designer"
                  company="KnowRoaming"
                  location="2014, 2015 | Toronto"
                  bullets={[
                    "Overhauled the IA and UI to better align with common use cases.",
                    "Developed mini-sites, designed print and video material, and improved product packaging."
                  ]}
                />

                <ResumeEntry
                  title="UI Designer"
                  company="Sony"
                  location="2013 | Waterloo"
                  bullets={[
                    "Led UI design and front-end development for a music discovery feature.",
                  ]}
                />

              </div>
            </div>
            
          </div>
        
        </div>
      </div>


      <div className="resume-page" id="page-2">
        <ResumeHeader />
        <div className="resume-body full-width">
          <div className="column" id="column-right">
            <div className="column-section " id="education">
              <h2>Education</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  entryClass="school-entry"
                  title="Systems Design Engineering"
                  company="University of Waterloo"
                  // location="2017"
                  bullets={[
                    "BASc. with cognitive science minor",
                  ]}
                />
              </div>
            </div>

            <div className="column-section" id="tools">
              <h2>Toolbox</h2>
              <div className="column-section-contents">
                <T>CSS</T> <T>HTML</T> <T>Javascript</T> <T>Typescript</T>
                <T>Angular</T> <T>Vue</T> <T>Storybook</T>
                <T>Sass</T> <T>React</T> <T>Node</T> <T>D3</T> <T>Git</T>
                <T>Swift</T><T>Python</T>
                <T>Sketch</T> <T>Zeplin</T> <T>InVision</T>
                <T>Photoshop</T> <T>Illustrator</T> <T>Balsamiq</T>
                <T>Excel</T><T>Airtable</T>
              </div>
            </div>
            
            <div className="column-section "id="projects">
              <h2>Projects</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  entryClass="project-entry"
                  title="Chameleon"
                  // location="2016-2017"
                  bullets={[
                    "Hearing protection that adapts to the volume of the wearer's environment.",
                  ]}
                />

                <ResumeEntry
                  entryClass="project-entry"
                  title="Zed"
                  bullets={[
                    "A JS library for rendering more realistic overlapping shadows.",
                  ]}
                />

                <ResumeEntry
                  entryClass="project-entry"
                  title="ZeplinX"
                  bullets={[
                    "A Confluence plugin to embed Zeplin images on a page.",
                  ]}
                />

                <ResumeEntry
                  entryClass="project-entry"
                  title="Sketch Flat Export"
                  bullets={[
                    "A Sketch plugin to export multiple artboards to a single directory.",
                  ]}
                />

                <ResumeEntry
                  entryClass="project-entry"
                  title="React Synth"
                  bullets={[
                    "A web based synthesizer with musical typing.",
                  ]}
                />

                <ResumeEntry
                  entryClass="project-entry"
                  title="SMRT WATR"
                  bullets={[
                    "An interactive water fountain, controlled by a web-app game.",
                  ]}
                />
              </div>
            </div>
                
            <div className="column-section " id="volunteer">
              <h2>Volunteer</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  entryClass="volunteer-entry"
                  title="The SymphoNYChorus"
                  location="2018 - now"
                  bullets={[
                    "Tenor section leader of the combined orchestra and choir.",
                  ]}
                />
                <ResumeEntry
                  entryClass="volunteer-entry"
                  title="Camp Kwasind"
                  location="2017"
                  bullets={[
                    "Maintenance, cabin leader and staff mentor.",
                  ]}
                />
                <ResumeEntry
                  entryClass="volunteer-entry"
                  title="The Water Boys"
                  location="2013-2017"
                  bullets={[
                    "Soloist and baritone section leader of the world-ranked all-male a cappella group.",
                  ]}
                />
                <ResumeEntry
                  entryClass="volunteer-entry"
                  title="UW/UX"
                  location="2015-2016"
                  bullets={[
                    "Vice President of the UW campus UX Club, mentoring younger students and planning club events.",
                  ]}
                />
              </div>
            </div>
          </div> 
        </div>
        <div className="resume-footer">
          <a href="http://thesonofthomp.com">thesonofthomp.com</a>
          <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
        </div>
      </div>
    </div>
  )
  
  
  render(){
    let _toRenderJSX = this.shouldRenderResume ? this._ResumeJSX : this._ReCaptchaJSX
    return (_toRenderJSX)
  }
}

export default ResumePage
