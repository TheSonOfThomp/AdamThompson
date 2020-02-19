import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Section from "templates/section/section";
import './projects-section.scss';

const Projects = [
  {
    name: 'Word Chain',
    url: 'https://github.com/TheSonOfThomp/Word-Chain',
    description: 'A thesaurus linker to find the closest synonym to two words.'
  },
  {
    name: 'Zed',
    url: 'https://github.com/TheSonOfThomp/Zed',
    description: 'A JS library for rendering more realistic overlapping shadows.'
  },
  {
    name: 'Sketch Flat Export',
    url: 'https://github.com/TheSonOfThomp/sketch-flat-export',
    description: 'A Sketch plugin to export multiple artboards to a single directory.'
  },
  {
    name: 'React Synth',
    url: 'https://github.com/TheSonOfThomp/React-Synth',
    description: 'A web based synthesizer with musical typing.'
  },
  {
    name: 'Tap Metronome',
    url: 'https://github.com/TheSonOfThomp/TAP-Metronome',
    description: 'A simple iOS metronome app with a minimal UI.'
  },
  // {
  //   name: 'Klypi',
  //   url: 'https://github.com/TheSonOfThomp/TAP-Metronome',
  //   description: 'A Safari extension for clipping online comments directly to Airtable.'
  // },
  {
    name: 'SMRT WATR',
    url: 'https://github.com/TheSonOfThomp/SMRTWATR',
    description: 'An interactive water fountain, controlled by a web-app game.'
  }
]

const ProjectsSection = () => {

  const projectsJSX = Projects.map(p => {
    return (
      <a className="project-card" href={p.url} alt={p.name}>
        <h2>{p.name}</h2>
        <FontAwesomeIcon icon={faGithub} size="m" />
        <span>{p.description}</span>
      </a>
    )
  })

  return (
    <Section title="Projects">
      {projectsJSX}
    </Section>
  )
}

export default ProjectsSection
