import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import SEO from "../components/seo"
import '../style/resume.scss'
import T from "../components/Resume/tool/tool"
import ResumeHeader from "../components/Resume/resume-header";
import ResumeEntry from "../components/Resume/resume-entry/resume-entry";


import * as resumeJson from '../data/resume.json';
import * as projectsJson from '../data/projects.json';

const resumeData = resumeJson.default
const projectsData = projectsJson.default

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
          {/* <div className="summary">{resumeData.blurb}</div> */}
          <div className="column" id="column-left">

            {/* EXPERIENCE */}
            <div className="column-section " id="experience">
              <h2 className="section-header">Experience</h2>
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

            {/* EDUCATION */}
            <div className="column-section " id="education">
              <h2 className="section-header">Education</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  entryClass="school-entry"
                  title={resumeData.education.uwaterloo.position}
                  company={resumeData.education.uwaterloo.company}
                  // location={resumeData.education.uwaterloo.class}
                  bullets={[
                    resumeData.education.uwaterloo.summary
                  ]}
                />
              </div>
            </div>

          {/* TOOLBOX */}
          <div className="column-section" id="tools">
            <h2 className="section-header">Skills</h2>
            <div className="column-section-contents">
              {resumeData.toolbox.map(tool => {
                return <T>{tool}</T>
              })}
            </div>
          </div>
          
          {/* PROJECTS */}
            <div className="column-section " id="projects">
              <h2 className="section-header">Projects</h2>
              <div className="column-section-contents">
                {Object.values(projectsData.projects).map(project => (
                  project.showOnResume && <ResumeEntry
                    entryClass="project-entry"
                    title={project.name}
                    bullets={[project.description]}
                  />
                ))}
              </div>
            </div>


            {/* AWARDS */}
            {/* <div className="column-section " id="projects">
              <h2 className="section-header">Awards</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.awards).map(award => (
                  award && <ResumeEntry
                    entryClass="project-entry"
                    title={award.title}
                    location={award.date}
                    bullets={[award.description]}
                  />
                ))}
              </div>
            </div> */}

        

            {/* VOLUTEER */}
            {/* <div className="column-section " id="volunteer">
              <h2 className="section-header">Volunteer</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.volunteer).map(volunteer => {
                  return <ResumeEntry
                    entryClass="volunteer-entry"
                    title={volunteer.title}
                    location={volunteer.location}
                  />
                })}
              </div>
            </div> */}


            {/* <div className="resume-footer">
              <a href="http://thesonofthomp.com">thesonofthomp.com</a>
              <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
              <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
            </div> */}

          </div>

        </div>
          <div className="resume-footer">
            <a href="https://www.linkedin.com/in/adammthompson/">
              <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
              /adammthompson
            </a>
            <a href="https://www.twitter.com/thesonofthomp/">
              <FontAwesomeIcon icon={faTwitter} size="sm" />
              @thesonofthomp
            </a>
            <a href="https://www.github.com/thesonofthomp">
              <FontAwesomeIcon icon={faGithub} size="sm" />
              @thesonofthomp
            </a>
            <a href="https://codepen.io/TheSonOfThomp/">
              <FontAwesomeIcon icon={faCodepen} size="sm" />
              thesonofthomp
            </a>
          </div>
      </div>


      {/* <div className="resume-page" id="page-2">
        <div className="resume-body full-width">
          <div className="column" id="column-right"> */}


            

            {/* VOLUTEER */}
            {/* <div className="column-section " id="volunteer">
              <h2 className="section-header">Volunteer</h2>
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
            </div> */}

            
          {/* </div> 
        </div>


        <div className="resume-footer">
          <a href="http://thesonofthomp.com">thesonofthomp.com</a>
          <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
          <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
        </div>


      </div> */}

    </div>
  )
  
  
  render(){
    let _toRenderJSX = this._ResumeJSX
    return (_toRenderJSX)
  }
}

export default ResumePage
