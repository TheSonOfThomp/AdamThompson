import React from "react"
import './resume-entry.scss';

const ResumeEntry = ({entryClass = 'job-entry', title, company, location, bullets}) => {
  return (
    <div className={`resume-entry ${entryClass}`}>
      <div className="entry-header">
        <h3 className="entry-title">{title}</h3>
        <h4 className="entry-company">{company}</h4>
        <span className="entry-location">{location}</span>
      </div>
      <ul className="entry-bullets">
        {bullets.map(b => {
          return (
            <li className="entry-bullet-point">{b}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResumeEntry