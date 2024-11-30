import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Section from "../../templates/section/section";
import ResumeCard from "../../components/resume-card/resume-card";
import styles from './resume-section.module.scss';

const ResumeSection = ({resume}) => {

  const experience = Object.entries(resume.experience);

  return(
    <Section title="Experience" className={styles.section} id="resume">
      <div className={styles.resume_card_section}>
      {
        experience.map( ([key, node]) => (
          <ResumeCard
            key={key}
            title={node.company}
            position={node.position}
            location={node.location}
            term={node.term}
            summary={node.summary}
            bullets={node.bullets}
          ></ResumeCard>
          ))
        }
      </div>
      <a className={styles.print_resume} href="/Adam Thompson Resume.pdf" download>Printable resume <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/></a>
    </Section>
  )
}

export default ResumeSection

