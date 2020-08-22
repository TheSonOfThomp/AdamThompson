import React from "react"
import Section from "../../templates/section/section";
import './projects-section.scss';
import ProjectCard from "./ProjectCard/project-card";
import {projects} from '../../data/projects.json'

const compareDates = (project1, project2) => {
  const Date1 = new Date(project1.date)
  const Date2 = new Date(project2.date)
  return (Date1 > Date2) ? -1 : 1
}

const ProjectsSection = () => {
  const projectsJSX = projects.sort(compareDates).map(project => {
    return (
      project.showOnHomepage && <ProjectCard 
        project={project}
        key={project.name}
      />
    )
  })

  return (
    <Section title="Recent Projects" id="projects">
      {projectsJSX}
    </Section>
  )
}

export default ProjectsSection
