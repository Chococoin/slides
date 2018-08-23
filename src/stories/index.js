import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../App';
import Slide1 from '../components/Slide1'
import Types from '../components/Types'
import Icons from '../components/Icons'

storiesOf('Welcome to App', module)
  .add('to App', () => <App  />);

storiesOf('Slide1', module)
  .add('add Slide1', () => <Slide1 />);

storiesOf('Types', module)
  .add('add Types', () => <Types />);

storiesOf('Icons', module)
  .add('add Icons', () => <Icons />);

