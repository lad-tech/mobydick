import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {CheckBox} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/CheckBox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <CheckBox
      value={'Pepe'}
      selected={boolean('selected', false)}
      disabled={boolean('disabled', false)}
      onPress={action('clicked checkbox')}>
      <Typography font={'Regular-Primary-M'}>
        {text('Text', 'Option1')}
      </Typography>
    </CheckBox>
  ));
