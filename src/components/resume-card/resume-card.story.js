import React from 'react';
import ResumeCard from './resume-card'

export default {
  component: ResumeCard,
  title: 'Cards'
}

export const Resume = () => {

  const data = {
    "id": "new-visions",
    "company": "New Visions",
    "url": "newvisions.org",
    "term": "July 2018 - present",
    "position": "Product Designer",
    "location": "New York, NY",
    "summary": "Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.",
    "logotype": "images/companies/newvisions_logotype.png",
    "logo": "images/companies/newvisions_logo.png"
  }

  return (
    <div style={{padding: '48px'}}>
      <ResumeCard
        id={'test'}
        title={data.company}
        location={data.location}
        term={data.term}
        position={data.position}
        summary={data.summary}
      ></ResumeCard>
    </div>
  )
}
