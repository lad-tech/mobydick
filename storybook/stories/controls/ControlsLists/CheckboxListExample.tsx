import {CheckBox, ControlsList} from '@npm/mobydick-controls';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import React from 'react';

const CheckboxListExample = () => {
  return (
    <ControlsList
      horizontal={boolean('horizontal', false)}
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}>
      <CheckBox value={'Option 1'}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 1', 'Option 1')}
        </Typography>
      </CheckBox>
      <CheckBox value={'Option 2'}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 2', 'Option 2')}
        </Typography>
      </CheckBox>
    </ControlsList>
  );
};

export default CheckboxListExample;
