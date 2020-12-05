import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import SEO from "../components/seo"
import styles from '../style/resume.module.scss'
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
    <div className={styles.resume_container}>
      <SEO title="Resume" />
      <div className={styles.resume_page" id="page_1}>
        <ResumeHeader/>
        <div className={styles.resume_body}>
          {/* <div className={styles.summary}>{resumeData.blurb}</div> */}
          <div className={styles.column" id="column_left}>

            {/* EXPERIENCE */}
            <div className={styles.column_section } id="experience">
              <h2 className={styles.section_header}>Experience</h2>
              <div className={styles.column_section_contents}>
                {Object.values(resumeData.experience).filter(job => job.show).map(job => {
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
            <div className={styles.column_section } id="education">
              <h2 className={styles.section_header}>Education</h2>
              <div className={styles.column_section_contents}>
                <ResumeEntry
                  entryClass="school-entry"
                  title={resumeData.education.uwaterloo.position}
                  company={resumeData.education.uwaterloo.company}
                  location={resumeData.education.uwaterloo.class}
                  bullets={[
                    resumeData.education.uwaterloo.summary
                  ]}
                />
              </div>
            </div>

            {/* PROJECTS */}
            <div className={styles.column_section } id="projects">
              <h2 className={styles.section_header}>Projects</h2>
              <div className={styles.column_section_contents}>
                {Object.values(projectsData.projects).map(project => (
                  project.showOnResume && <ResumeEntry
                    entryClass="project-entry"
                    title={project.name}
                    bullets={[project.description]}
                  />
                ))}
              </div>
            </div>

          {/* TOOLBOX */}
          <div className={styles.column_section} id="tools">
            <h2 className={styles.section_header}>Skills</h2>
            <div className={styles.column_section_contents}>
              {resumeData.toolbox.map(tool => {
                return <T>{tool}</T>
              })}
            </div>
          </div>
          
          


            {/* AWARDS */}
            {/* <div className={styles.column_section } id="projects">
              <h2 className={styles.section_header}>Awards</h2>
              <div className={styles.column_section_contents}>
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
            {/* <div className={styles.column_section } id="volunteer">
              <h2 className={styles.section_header}>Volunteer</h2>
              <div className={styles.column_section_contents}>
                {Object.values(resumeData.volunteer).map(volunteer => {
                  return <ResumeEntry
                    entryClass="volunteer-entry"
                    title={volunteer.title}
                    location={volunteer.location}
                  />
                })}
              </div>
            </div> */}


            {/* <div className={styles.resume_footer}>
              <a href="http://thesonofthomp.com">thesonofthomp.com</a>
              <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
              <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
            </div> */}

          </div>

        </div>
          <div className={styles.resume_footer}>
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


      {/* <div className={styles.resume_page" id="page_2}>
        <div className={styles.resume_body full_width}>
          <div className={styles.column" id="column_right}> */}


            

            {/* VOLUTEER */}
            {/* <div className={styles.column_section } id="volunteer">
              <h2 className={styles.section_header}>Volunteer</h2>
              <div className={styles.column_section_contents}>
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


        <div className={styles.resume_footer}>
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
