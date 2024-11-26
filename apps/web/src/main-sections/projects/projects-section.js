import React from "react"
import Section from "../../templates/section/section";
import styles from './projects-section.module.scss';
import ProjectCard from "./ProjectCard/project-card";

const compareDates = (project1, project2) => {
  const Date1 = new Date(project1.date)
  const Date2 = new Date(project2.date)
  return (Date1 > Date2) ? -1 : 1
}

const ProjectsSection = ({projects}) => {


  return (
    <Section title="Recent Projects" className={styles.section} id="projects">
      {
        projects.sort(compareDates).map(project => {
          return (
            project.showOnHomepage && <ProjectCard
              project={project}
              key={project.name}
            />
          )
        })
      }
    </Section>
  )
}

export default ProjectsSection
