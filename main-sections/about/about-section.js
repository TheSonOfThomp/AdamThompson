import React from "react"
import Section from "../../templates/section/section";
import styles from './about-section.module.scss';
import about from '../../data/about.md'


const AboutSection = ({ data }) => {
  return (
    <Section id={styles.about}>
      <span className={styles.about_text} dangerouslySetInnerHTML={{ __html: about.html }}>
      </span>
    </Section>
  )
}

export default AboutSection
