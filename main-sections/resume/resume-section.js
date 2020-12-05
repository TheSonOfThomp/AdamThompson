import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Section from "../../templates/section/section";
import ResumeCard from "../../components/resume-card/resume-card";
import * as resumePdf from '../../images/Adam Thompson - Resume.pdf'
import * as resumeJson from '../../data/resume-full.json'
import styles from './resume-section.module.scss';

const ResumeSection = () => {
  const resumeData = Object.entries(resumeJson.default.experience)
  return(
    <Section title="Experience" id="resume">
      <div className={styles.resume_card_section}>
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
      <a className={styles.print_resume} href={resumePdf} download>Printable resume <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/></a>
    </Section>
  )
}

export default ResumeSection

