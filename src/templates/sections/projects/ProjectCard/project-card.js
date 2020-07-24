import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './project-card.styles.scss';
import { useStaticQuery, graphql } from 'gatsby';

const ProjectCard = ({project}) => {
  const iconObj = 
    (project.icon === "github") ? faGithub 
    : (project.icon === "npm") ? faNpm 
    : (project.icon === "link") ? faExternalLinkAlt
    : null

  const imgQuery = useStaticQuery(graphql`
    {
      allImageSharp {
        nodes {
          fluid {
            originalName
            src
          }
        }
      }
    }
  `)

  const logoSrc = imgQuery.allImageSharp.nodes.find(node => node.fluid.originalName === project.logo).fluid.src

  return (
  <a className="project-card" href={project.url} alt={project.name}>
    <h2 className="project-title">{project.name}</h2>
    <span className="project-description">{project.description}</span>
    <img className="project-logo" src={logoSrc}></img>
    <FontAwesomeIcon className="project-icon" icon={iconObj} size="sm" />
  </a>
)};

export default ProjectCard;
