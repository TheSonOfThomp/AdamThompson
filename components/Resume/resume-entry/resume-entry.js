import React from "react"
import classnames from "classnames"
import { Remarkable } from 'remarkable';
import styles from './resume-entry.module.scss';

const md = new Remarkable()

const ResumeEntry = ({entryClass = 'job_entry', title, company, location, bullets}) => {
  return (
    <div className={classnames(styles.resume_entry, styles[entryClass])} id={company && company.replace(/( )/g, '-').toLowerCase()}>
      <div className={styles.entry_header}>
        <h4 className={styles.entry_company}>{company}</h4>
        <h3 className={styles.entry_title}>{title}</h3>
        <span className={styles.entry_location}>{location}</span>
      </div>
      <ul className={styles.entry_bullets}>
        {bullets && bullets.map(b => {
          return (
            <li className={styles.entry_bullet_point} dangerouslySetInnerHTML={{ __html: md.render(b)}}></li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResumeEntry