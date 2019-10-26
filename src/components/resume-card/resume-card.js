import React from "react"
import Card from "../card/card";
import './resume-card.scss';

const ResumeCard = ({id, logoSrc, title, location, term, position, summary, bullets}) => {

  return (
    <div 
      id={id}
      className={'resume-card'}
    >
        <div className="resume-card-header">
          {/* <img className="logo" src={logoSrc} alt={title}/> */}
          <h2 className="position">{position}</h2>
          <span className="location">{term}</span>
          <h2 className="company">{title}</h2>
        </div>
        <p className="summary">{summary}</p>
        {/* {bullets} */}
    </div>
  )
}

export default ResumeCard
