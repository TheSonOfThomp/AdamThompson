import React from "react"
import Section from "templates/section/section";
import './projects-section.scss';
import ProjectCard from "./ProjectCard/project-card";
import {projects} from '../../../data/projects.json'

const ProjectsSection = () => {
  const projectsJSX = projects.map(p => {
    return (
      <ProjectCard 
        project={p}
        key={p.name}
      />
    )
  })

  return (
    <Section title="Projects">
      {projectsJSX}
    </Section>
  )
}

export default ProjectsSection
