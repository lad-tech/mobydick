import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {CheckBox} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Text} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/CheckBox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <CheckBox
      selected={boolean('selected', false)}
      disabled={boolean('disabled', false)}
      onPress={action('clicked checkbox')}>
      <Text>{text('Text', 'Option1')}</Text>
    </CheckBox>
  ));
