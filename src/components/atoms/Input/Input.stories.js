/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

// Add knobs to easily change colors of button
storiesOf('Atoms/Input', module)
  .add('Normal', () => <Input placeholder="Login" />)
  .add('Search', () => <Input placeholder="Search" search />);
