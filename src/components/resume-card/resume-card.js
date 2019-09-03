import React from "react"
import Card from "../card/card";
import './resume-card.scss';

const ResumeCard = ({id, logoSrc, title, location, term, position, summary, bullets}) => {

  return (
    <Card 
      id={id}
      className={'resume-card'}
    >
        <div className="resume-header">
          {/* <img className="logo" src={logoSrc} alt={title}/> */}
          <h1 className="title">{position}</h1>
          {/* <span className="small-text">{location} | {term}</span> */}
        </div>
        <h2 className="subtitle">{title}</h2>
        <p className="summary">{summary}</p>
        {/* {bullets} */}
    </Card>
  )
}

export default ResumeCard
