import React from 'react';
import Card from './card'

export default {
  component: Card,
  title: 'Cards/Card'
}

export const Basic = () => (
  <div style={{padding: '48px'}}>
    <Card
      id={'test'}
      className=""
      children={'Hello, I\'m a card'}
    ></Card>
  </div>
)
