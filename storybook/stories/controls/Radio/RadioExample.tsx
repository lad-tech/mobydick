import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {Radio} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';

const RadioExample = () => {
  return (
    <Radio
      value={'Pepe'}
      selected={boolean('selected', false)}
      disabled={boolean('disabled', false)}
      onPress={action('clicked radio')}>
      <Typography font={'Regular-Primary-M'}>
        {text('Text', 'Option1')}
      </Typography>
    </Radio>
  );
};

export default RadioExample;
