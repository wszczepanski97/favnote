/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Bulb from 'assets/bulb.svg';
import Logout from 'assets/logout.svg';
import Pen from 'assets/pen.svg';
import Plus from 'assets/plus.svg';
import Twitter from 'assets/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb', () => <ButtonIcon icon={Bulb} />)
  .add('Logout', () => <ButtonIcon icon={Logout} />)
  .add('Pen', () => <ButtonIcon icon={Pen} />)
  .add('Plus', () => <ButtonIcon icon={Plus} />)
  .add('Twitter', () => <ButtonIcon icon={Twitter} />);
