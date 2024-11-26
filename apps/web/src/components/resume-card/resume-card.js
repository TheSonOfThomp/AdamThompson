import React from "react"
// import Card from "../card/card";
import styles from './resume-card.module.scss';

const ResumeCard = ({id, logoSrc, title, location, term, position, summary, bullets}) => {

  return (
    <div 
      id={id}
      className={styles.resume_card}
    >
        <div className={styles.resume_card_header}>
          {/* <img className={styles.logo} src={logoSrc} alt={title}/> */}
          <h2 className={styles.position}>{position}</h2>
          <span className={styles.location}>{term}</span>
          <h2 className={styles.company}>{title}</h2>
        </div>
        <p className={styles.summary}>{summary}</p>
        {/* {bullets} */}
    </div>
  )
}

export default ResumeCard
