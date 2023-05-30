import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';

import ChatExample from './ChatExample';

storiesOf('Design System/Chat', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Chat', () => <ChatExample />);
