import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, TouchableOpacity} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

storiesOf('Design System/core/TouchableOpacity', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <TouchableOpacity onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </TouchableOpacity>
  ));
