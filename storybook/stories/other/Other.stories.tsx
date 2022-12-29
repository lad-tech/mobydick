import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';

import CounterExample from './Example/CounterExample';
import DotsExample from './Example/DotsExample';
import AvatarExample from './Example/AvatarExample';

storiesOf('Design system/Other', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Dots', () => <DotsExample />)
  .add('Counter', () => <CounterExample />)
  .add('Avatar', () => <AvatarExample />);
