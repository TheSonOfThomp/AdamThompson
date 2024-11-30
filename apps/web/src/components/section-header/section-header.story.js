import React from 'react';
import SectionHeader from './section-header'

export default {
  component: SectionHeader,
  title: 'SectionHeader'
}


export const Basic = () => {
  return (
    <div style={{ display: 'grid', margin: '32px'}}>
      <SectionHeader>Header</SectionHeader>
    </div>
  )
}
