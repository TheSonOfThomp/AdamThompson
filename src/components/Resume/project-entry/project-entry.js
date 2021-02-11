import React from "react"
import classnames from "classnames"
import { Remarkable } from 'remarkable';
import _styles from '../resume-entry/resume-entry.module.scss';
import styles from './project-entry.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const md = new Remarkable()

const ProjectEntry = ({
  project
}) => {
  const {name, color, url, logo, icon, description, tools, date, tags} = project
  const iconObj = 
    (project.icon === "github") ? faGithub 
    : (project.icon === "npm") ? faNpm 
    : (project.icon === "link") ? faExternalLinkAlt
    : null
  return (
    <div className={classnames(styles.project_entry)} id={name && name.replace(/( )/g, '-').toLowerCase()}>
      <a href={url} className={styles.project_header}>
        <h3 className={styles.project_title}>{name}</h3>
        {/* <span className={styles.project_icon} >
          <FontAwesomeIcon icon={iconObj} size="xs" />
        </span> */}
      </a>
      <span className={styles.project_description}>{description}</span>
      {/* {tools && (
        <ul className={styles.project_tools}>
          {tools.map(tool => <li className={styles.project_tool}>{tool}</li>)}
        </ul>
      )} */}
      {tags && tags.map(tag => <span className="ats-only">{tag}, </span>) }
    </div>
  )
}

export default ProjectEntry