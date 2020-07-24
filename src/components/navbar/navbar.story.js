import React from 'react';

import { storiesOf } from '@storybook/react';

import Navbar from './navbar'

storiesOf('Navbar', module)
  .add('Basic', () => {
    return (
      <div style={{ backgroundColor: '#2AC51B', padding: '4px'}}>
        <Navbar></Navbar>
      </div>
    )
  }
)