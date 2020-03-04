import React from "react"
import SEO from "../components/seo"
import '../style/resume.scss'
import T from "../components/Resume/tool/tool"
import ResumeHeader from "../components/Resume/resume-header";
import ResumeEntry from "../components/Resume/resume-entry/resume-entry";

import * as resumeJson from '../data/resume.json';
const resumeData = resumeJson.default

class ResumePage extends React.Component {

  constructor(){
    super()
    this.shouldRenderResume = true;
  }

  _ResumeJSX = (
    <div className="resume-container">
      <SEO title="Resume" />
      <div className="resume-page" id="page-1">
        <ResumeHeader/>
        <div className="resume-body">
          <div className="blurb">
            {resumeData.blurb} 
          </div>
          <div className="column" id="column-left">
            <div className="column-section " id="experience">
              <h2>Experience</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.experience).map(job => {
                  return <ResumeEntry
                    title={job.position}
                    company={job.company}
                    location={`${job.term} | ${job.location}`}
                    bullets={job.bullets}
                  />
                })}
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
                  bullets={[
                    "BASc. with cognitive science minor",
                  ]}
                />
              </div>
            </div>

            
            <div className="column-section "id="projects">
              <h2>Projects</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.projects).map(project => {
                  return <ResumeEntry
                    entryClass="project-entry"
                    title={project.title}
                    bullets={[project.description]}               
                  />
                })}
              </div>
            </div>
                
            <div className="column-section " id="volunteer">
              <h2>Volunteer</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.volunteer).map(volunteer => {
                  return <ResumeEntry
                    entryClass="volunteer-entry"
                    title={volunteer.title}
                    location={volunteer.location}
                    bullets={[volunteer.description]}
                  />
                })}
              </div>
            </div>

            <div className="column-section" id="tools">
              <h2>Toolbox</h2>
              <div className="column-section-contents">
                {resumeData.toolbox.map(tool => {
                  return <T>{tool}</T>
                }) }
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
    let _toRenderJSX = this._ResumeJSX
    return (_toRenderJSX)
  }
}

export default ResumePage
