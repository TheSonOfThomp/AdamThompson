import React from "react"
import Markdown from 'markdown-to-jsx'
import Section from "../../templates/section/section";
import styles from './about-section.module.scss';

const AboutSection = () => {
  return (
    <Section className={styles.section} id="about">
      <span className={styles.about_text}>
        <Markdown>
          ## I'm a New York based UX engineer, developing impactful software experiences. 
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          *UX engineer* typically implies a designer who codes—and that's an accurate description. I built and maintain a UI component library, re-wrote the core CSS architecture, and built a new landing page for the [New Visions Portal](https://portal-test.newvisions.org).
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          But more precisely, a UX engineer is someone who applies engineering problem-solving to holistically solve complex interaction problems. The [New Visions dashboard framework](./portfolio/newvisions), and the [Noom food logging workflow](./portfolio/noom) are just two examples of tackling tough problems through analysis and creative problem solving. 
        </Markdown>

        <Markdown options={{ forceBlock: true }}>
          I'm at the intersection of design and engineering, with an education in [Systems Design Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering) and experience in UX since 2013. I approach problems holistically, design complete solutions, and execute them efficiently.
        </Markdown>
      </span>
    </Section>
  )
}

export default AboutSection
