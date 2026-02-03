// @ts-nocheck
import React from "react"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import T from "../components/Resume/tool/tool"
import ResumeHeader from "../components/Resume/resume-header"
import ResumeEntry from "../components/Resume/resume-entry/resume-entry"
import * as projectsJson from "../data/projects.json"
import fs from "fs"
import path from "path"
import yaml from "js-yaml"

const projectsData = projectsJson.default

const ResumeFooter = () => (
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
)

const ResumeSection = ({ id, header, children }) => (
  <div
    className="resume-section"
    id={id || header.replace(/( )/, "-").toLowerCase()}
  >
    <h2 className="resume-section-header">{header}</h2>
    <div className="resume-section-contents">{children}</div>
  </div>
)

// Flatten experience entries - companies with multiple positions become multiple job entries
function flattenExperience(experience) {
  const jobs = []
  Object.values(experience).forEach((company) => {
    if (!company.show) return

    // Handle new format with positions array
    if (company.positions && Array.isArray(company.positions)) {
      company.positions.forEach((position) => {
        jobs.push({
          company: company.company,
          url: company.url,
          location: company.location,
          displayCompact: company.displayCompact,
          isCoop: company.isCoop,
          ...position,
        })
      })
    } else {
      // Handle old format without positions array
      jobs.push(company)
    }
  })
  return jobs
}

function ResumePage({ resumeData }) {
  // TODO: Captcha and browser check
  const shouldRenderResume = true
  const jobs = flattenExperience(resumeData.experience)

  return (
    <div className="resume-container">
      <Head>
        <title>Adam Thompson Resume</title>
      </Head>
      <div className="resume-page" id="page-1">
        <ResumeHeader />
        <div className="resume-body">
          {/* EXPERIENCE */}
          <ResumeSection id="experience" header="Professional Experience">
            {jobs.map((job, index) => (
              <ResumeEntry
                key={`${job.company}-${index}`}
                header1={job.company}
                header2={job.position}
                aside={`${job.term} ${job.isCoop ? "(Co-op)" : ""} | ${
                  job.location
                }`}
                contentArray={job.bullets}
                isCompact={job.displayCompact}
              />
            ))}
          </ResumeSection>
        </div>
      </div>
      {/* PAGE 2 */}
      <div className="resume-page" id="page-2">
        <ResumeHeader minimal />

        <div className="resume-body">
          {/* EDUCATION */}
          <ResumeSection id="education" header="Edu.">
            <ResumeEntry
              header1={resumeData.education.uwaterloo.company}
              header2={resumeData.education.uwaterloo.position}
              aside={resumeData.education.uwaterloo.class}
              contentArray={[resumeData.education.uwaterloo.summary]}
            />
          </ResumeSection>

          {/* PROJECTS */}
          <ResumeSection id="projects" header="Projects">
            {Object.values(projectsData.projects).map(
              (project) =>
                project.showOnResume && (
                  <ResumeEntry
                    key={project.name}
                    header1={project.name}
                    aside={project.tools.join(", ")}
                    contentArray={[project.description]}
                    isCompact={true}
                  />
                )
            )}
          </ResumeSection>

          {/* TOOLBOX */}
          <ResumeSection id="tools" header="Skills">
            {resumeData.toolbox.map((tool) => (
              <T key={tool}>{tool}</T>
            ))}
          </ResumeSection>

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
        </div>
        <ResumeFooter />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const resumePath = path.join(process.cwd(), "src", "data", "resume.yaml")
  const fileContents = fs.readFileSync(resumePath, "utf8")
  const resumeData = yaml.load(fileContents)

  return {
    props: {
      resumeData,
    },
  }
}

export default ResumePage
