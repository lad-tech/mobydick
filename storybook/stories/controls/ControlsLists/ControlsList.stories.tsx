import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {CheckBox, Radio, ControlsList} from '@npm/mobydick-controls';
import {Typography} from '@npm/mobydick-typography';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/ControlsList.tsx', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('checkbox list', () => (
    <ControlsList
      horizontal={boolean('horizontal', false)}
      single={boolean('single', false)}
      onChange={action('pressed')}>
      <CheckBox
        value={text('text 1', 'Option 1')}
        disabled={boolean('disabled', false)}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 1', 'Option 1')}
        </Typography>
      </CheckBox>
      <CheckBox
        value={text('text2', 'Option 2')}
        disabled={boolean('disabled 2', false)}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 2', 'Option 2')}
        </Typography>
      </CheckBox>
    </ControlsList>
  ))
  .add('radio list', () => (
    <ControlsList
      single={boolean('single', false)}
      onChange={action('pressed')}>
      <Radio
        value={text('text', 'Option 1')}
        disabled={boolean('disabled', false)}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 1', 'Option 1')}
        </Typography>
      </Radio>
      <Radio
        value={text('text2', 'Option 2')}
        disabled={boolean('disabled 2', false)}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 2', 'Option 2')}
        </Typography>
      </Radio>
    </ControlsList>
  ));
