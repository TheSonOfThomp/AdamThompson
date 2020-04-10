import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './project-card.styles.scss';

const ProjectCard = ({project}) => {
  const {url, name, description, icon} = project
  const iconObj = 
    (icon === "github") ? faGithub 
    : (icon === "npm") ? faNpm 
    : (icon === "link") ? faExternalLinkAlt
    : null
  return (
  <a className="project-card" href={url} alt={name}>
    <h2 className="project-title">{name}</h2>
    <span className="project-description">{description}</span>
      <FontAwesomeIcon className="project-icon" icon={iconObj} size="sm" />
  </a>
)};

ProjectCard.propTypes = {
  // bla: PropTypes.string,
};

ProjectCard.defaultProps = {
  // bla: 'test',
};

export default ProjectCard;
