import {ControlsList, Radio} from '@npm/mobydick-controls';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import React from 'react';

const RadioListExample = () => {
  return (
    <ControlsList
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}>
      <Radio value={'Option 1'} containerStyle={{padding: 12}}>
        <Typography font={'Regular-Primary-M'} numberOfLines={1}>
          {text('Text 1', 'Option 1')}
        </Typography>
      </Radio>
      <Radio value={'Option 2'} containerStyle={{padding: 12}}>
        <Typography font={'Regular-Primary-M'}>
          {text('Text 2', 'Option 2')}
        </Typography>
      </Radio>
    </ControlsList>
  );
};

export default RadioListExample;
