import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card } from 'components/card/card'

storiesOf('Card', module)
  .add('with text', () => 
    <Card
      id={'test'}
      className=""
      style=""
      children={'hello'}
    ></Card>
  )