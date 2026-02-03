import React from "react"
import classnames from "classnames"
import { Remarkable } from 'remarkable';
import styles from './resume-entry.module.scss';

const md = new Remarkable()

const ResumeEntry = ({ 
  header1,
  header2,
  aside,
  contentArray,
  isCompact,
}) => {
  return (
    <div className={classnames(styles.resume_entry, isCompact ? styles.isCompact : '')} id={header1 && header1.replace(/( )/g, '-').toLowerCase()}>
      <div className={styles.entry_header}>
        <h4 className={styles.entry_company}>{header1}</h4>
        <h3 className={styles.entry_title}>{header2}</h3>
        <span className={styles.entry_location}>{aside}</span>
      </div>
      <ul className={styles.entry_bullets}>
        {contentArray && contentArray.map((b, index) => {
          return (
            <li key={index} className={styles.entry_bullet_point} dangerouslySetInnerHTML={{ __html: md.render(b)}}></li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResumeEntry