import React from "react"
import Markdown from 'markdown-to-jsx'
import Section from "../../templates/section/section";
import styles from './about-section.module.scss';

const AboutSection = ({ data }) => {
  return (
    <Section className={styles.section} id="about">
      <span className={styles.about_text}>
        <Markdown>
          ## I'm a New York based UX engineer, developing impactful software experiences. 
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          A *UX engineer* typically means someone who writes UI code—and that's an accurate description of me. I maintain a UI component library, re-wrote the core CSS architecture, and built a new landing page for the [New Visions Portal](https://portal.newvisions.org).
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          But more precisely, I'm a UX engineer in that I apply engineering problem-solving to holistically solve complex interaction problems. The [New Visions dashboard framework](./portfolio/newvisions), and the [Noom food logging workflow](./portfolio/noom) are just two examples of tackling tough problems through analysis and creative problem solving. 
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          I'm at the intersection of design and engineering, with an education in [Systems Design Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering) and experience in UX since 2013. I approach problems holistically, design complete solutions, and execute them efficiently.
        </Markdown>
      </span>
    </Section>
  )
}

export default AboutSection
