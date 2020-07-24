import React from "react"
import './resume-entry.scss';

const ResumeEntry = ({entryClass = 'job-entry', title, company, location, bullets}) => {
  return (
    <div className={`resume-entry ${entryClass}`}>
      <div className="entry-header">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span className="location">{location}</span>
      </div>
      <div className="bullets">
        <ul>
          {bullets.map(b => {
            return (
              <li>{b}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ResumeEntry