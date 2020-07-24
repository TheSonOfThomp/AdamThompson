import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './card'

storiesOf('Cards|Card', module)
  .add('with text', () => 
  <div style={{padding: '48px'}}>
    <Card
      id={'test'}
      className=""
      children={'Hello, I\'m a card'}
    ></Card>
  </div>
  )