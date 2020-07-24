import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionHeader from './section-header'

storiesOf('Headers', module)
.add('Section header', () => {
  return (
    <div style={{ display: 'grid', margin: '32px'}}>
      <SectionHeader>Header</SectionHeader>
    </div>
  )
})