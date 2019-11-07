/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('xl', () => <Heading big> XL Heading</Heading>)
  .add('l', () => <Heading> L Heading</Heading>);
