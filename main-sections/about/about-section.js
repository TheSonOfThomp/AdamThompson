import React from "react"
import Section from "../../templates/section/section";

;
import styles from './about-section.module.scss';
// import portraitImage from 'images/Adam_web.jpg';


const AboutSection = ({ data }) => {
  const aboutQuery = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "About" } } }
      ) {
        nodes {
          html
        }
      }
    }
  `)
  const about = aboutQuery.allMarkdownRemark.nodes[0].html
  
  return (
    <Section id="about" className={styles.green_divider}>
      <span className={styles.about_text} dangerouslySetInnerHTML={{ __html: about }}></span>
    </Section>
  )
}

export default AboutSection
