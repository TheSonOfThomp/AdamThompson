import React from "react"
import Markdown from 'markdown-to-jsx'
import Section from "../../templates/section/section";
import styles from './about-section.module.scss';

const AboutSection = () => {
  return (
    <Section className={styles.section} id="about">
      <span className={styles.about_text}>
        <Markdown>
          # I'm a software engineer with a focus on user experience.
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          Currently [building design systems](https://mongodb.design) at MongoDB, I have experience in UX since 2013, and an education in [Systems Design Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering). I approach problems holistically, design complete solutions, and execute them efficiently.
        </Markdown>
      </span>
    </Section>
  )
}

export default AboutSection
