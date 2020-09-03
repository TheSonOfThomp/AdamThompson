import React from "react"
import monogram from '../../images/monogram-green.svg';
import './resume-header.scss';

const ResumeHeader = () => {
  return (
    <div className="resume-header">
      <img alt="A.T. monogram" id="monogram" src={monogram}></img>
      <div className="name" >
        <h1 id="name">Adam Thompson</h1>
        <span id="tagline">Frontend UI Engineer</span>
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