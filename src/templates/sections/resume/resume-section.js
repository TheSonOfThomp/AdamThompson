import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Section from "templates/section/section";
import ResumeCard from "components/resume-card/resume-card";
import './resume-section.scss';
import * as resumeJson from '../../../data/resume.json'
const ResumeSection = () => {
  const resumeData = Object.entries(resumeJson.default.experience)
  return(
    <Section title="Experience" id="resume">
      <a className="print-resume" href="./resume" target="_blank">Printable resume <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/></a>
      <div className="resume-card-section">
      {
        resumeData.map( node => (
          <ResumeCard
            key={node[0]}
            title={node[1].company}
            position={node[1].position}
            location={node[1].location}
            term={node[1].term}
            summary={node[1].summary}
            bullets={node[1].bullets}
            ></ResumeCard>
          ))
        }
      </div>
    </Section>
  )
}

export default ResumeSection

