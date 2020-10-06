import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import './project-card.styles.scss';

import { useCustomProp } from  '../../../hooks/useCustomProperty'

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
            srcSet
            srcSetWebp
          }
        }
      }
    }
  `)

  const logoImage = imgQuery.allImageSharp.nodes.find(node => node.fluid.originalName === project.logo)?.fluid

  const cardRef = useCustomProp('--project-color', project.color)

  return (
    <a ref={cardRef} className="project-card" href={project.url} alt={project.name} target="_blank" rel="noreferrer">
      <h2 className="project-title">{project.name}</h2>
      <span className="project-description">{project.description}</span>
      <picture className="project-logo">
        <source srcSet={logoImage.srcSetWebp} type="image/webp"/>
        <source srcSet={logoImage.srcSet} type="image/png"/>
        <img className="project-logo" src={logoImage.src} alt={`Logo for ${project.name}`} loading="lazy" />
      </picture>
      <FontAwesomeIcon className="project-icon" icon={iconObj} size="sm" />
      {
        project.tools && (
          <div className="project-tools-wrapper">
            <div className="project-tools-label">Built with</div>
            <div className="project-tools-list">
              {
                project.tools.map(tool => (
                  <span className="project-tool" key={tool}>{tool}</span>
                ))
              }
            </div>
          </div>
        )
      }
    </a>
)};

export default ProjectCard;
