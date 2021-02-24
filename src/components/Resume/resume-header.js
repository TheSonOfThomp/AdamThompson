import React from "react"
import Monogram from '../../images/monogram-green.svg'; // imported as react component
import styles from './resume-header.module.scss';

const ResumeHeader = ({tagline}) => {
  return (
    <div className={styles.resume_header}>
      {/* <img alt="A.T. monogram" id="monogram" src={monogram}/> */}
      <Monogram id="monogram" />
      <div className={styles.name} >
        <h1 id="name">Adam Thompson</h1>
        <span id="tagline">{tagline || 'UX Engineer' }</span>
      </div>
      <div id="contacts">
        <a href="http://thesonofthomp.com" id="website">thesonofthomp.com</a>
        <a href="mailto:adam@thesonofthomp.com" id="email">adam@thesonofthomp.com</a>
        <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
      </div>
      {/* <span id="tagline">Frontend UI Engineer</span> */}
    </div>
  )
}

export default ResumeHeader