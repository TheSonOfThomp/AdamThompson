import React from "react"
import Markdown from "markdown-to-jsx"
import Section from "../../templates/section/section"
import styles from "./about-section.module.scss"
import { Quote } from "../../components/Quote"

const AboutSection = () => {
  return (
    <Section className={styles.section} id="about">
      <Quote quote={"Software engineer specializing in user experience"} />
      <Markdown options={{ forceBlock: true }}>
        Currently [building design systems](https://mongodb.design) at MongoDB.
      </Markdown>
      <Markdown options={{ forceBlock: true }}>
        B.ASc. in [Systems Design
        Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering).
      </Markdown>
    </Section>
  )
}

export default AboutSection
