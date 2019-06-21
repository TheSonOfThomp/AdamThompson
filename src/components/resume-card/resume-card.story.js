import React from 'react';

import { storiesOf } from '@storybook/react';

import ResumeCard from './resume-card'

storiesOf('Cards|Resume Card', module)
  .add('with text', () => {

    const data = {
      "id": "vehicula-nullam-pellentesque",
      "company": "Vehicula Nullam Pellentesque",
      "url": "vehicula.org",
      "term": "July 2018 - present",
      "position": "Aenean Vulputate",
      "location": "New York, NY",
      "summary": "Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.",
      "logotype": "images/companies/newvisions_logotype.png",
      "logo": "images/companies/newvisions_logo.png"
    }

    return (
      <div style={{padding: '48px'}}>
        <ResumeCard
          id={'test'}
          data={data}
        ></ResumeCard>
      </div>
    )
  }
  )