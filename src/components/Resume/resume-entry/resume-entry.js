import React from "react"
import { Remarkable } from 'remarkable';
import './resume-entry.scss';

const md = new Remarkable()

const ResumeEntry = ({entryClass = 'job-entry', title, company, location, bullets, tools}) => {
  return (
    <div className={`resume-entry ${entryClass}`} id={company && company.replace(/( )/g, '-').toLowerCase()}>
      <div className="entry-header">
        <h4 className="entry-company">{company}</h4>
        <h3 className="entry-title">{title}</h3>
        <span className="entry-location">{location}</span>
      </div>
      <ul className="entry-bullets">
        {bullets && bullets.map(b => {
          console.log(md.render(b))
          return (
            <li className="entry-bullet-point" dangerouslySetInnerHTML={{ __html: md.render(b)}}></li>
          )
        })}
      </ul>
      {tools && 
        <div className="entry-tools">
         {tools.map(t => <span className="entry-tool">{t}</span>)}
        </div>
      }
    </div>
  )
}

export default ResumeEntry