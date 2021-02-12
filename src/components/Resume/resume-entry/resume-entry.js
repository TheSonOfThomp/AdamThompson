import React from "react"
import classnames from "classnames"
import { Remarkable } from 'remarkable';
import styles from './resume-entry.module.scss';

const md = new Remarkable()

const ResumeEntry = ({
  entryClass = 'job_entry', 
  title,
  company,
  location,
  bullets,
  tags,
  tools,
  url
}) => {
  return (
    <div className={classnames(styles.resume_entry, styles[entryClass])} id={company && company.replace(/( )/g, '-').toLowerCase()}>
      <div className={styles.entry_header}>
        <h4 className={styles.entry_company}>{company}</h4>
        <h3 className={styles.entry_title}>{title}</h3>
        <span className={styles.entry_location}>{location}</span>
      </div>
      {tools && (
        <ul className={styles.entry_tools}>
          {tools.map(tool => <li className={styles.entry_tool}>{tool}</li>)}
        </ul>
      )}
      <ul className={styles.entry_bullets}>
        {bullets && bullets.map(b => {
          return (
            <li className={styles.entry_bullet_point} dangerouslySetInnerHTML={{ __html: md.render(b)}}></li>
          )
        })}
      </ul>
      {tags && tags.map(tag => <span className="ats-only">{tag}, </span>) }
    </div>
  )
}

export default ResumeEntry