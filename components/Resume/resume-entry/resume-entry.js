import React from "react"
import { Remarkable } from 'remarkable';
import styles from './resume-entry.module.scss';

const md = new Remarkable()

const ResumeEntry = ({entryClass = 'job-entry', title, company, location, bullets}) => {
  return (
    <div className={`resume-entry ${entryClass}`} id={company && company.replace(/( )/g, '-').toLowerCase()}>
      <div className={styles.entry_header}>
        <h4 className={styles.entry_company}>{company}</h4>
        <h3 className={styles.entry_title}>{title}</h3>
        <span className={styles.entry_location}>{location}</span>
      </div>
      <ul className={styles.entry_bullets}>
        {bullets && bullets.map(b => {
          console.log(md.render(b))
          return (
            <li className={styles.entry_bullet_point} dangerouslySetInnerHTML={{ __html: md.render(b)}}></li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResumeEntry