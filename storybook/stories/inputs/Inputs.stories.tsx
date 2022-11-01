import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';

import ExampleSearch from './Search/ExampleSearch';
import ExampleInput from './InputField/ExampleInput';
import ExampleVerification from './Verification/ExampleVerification';

storiesOf('Design System/Inputs', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Search', () => <ExampleSearch />)
  .add('Input', () => <ExampleInput />)
  .add('Verification', () => <ExampleVerification />);
