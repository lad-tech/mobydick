import {CheckBox, ControlsList} from '@npm/mobydick-controls';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import React from 'react';

const CheckboxListExample = () => {
  const font = 'Regular-Primary-M';

  return (
    <ControlsList
      horizontal={boolean('horizontal', false)}
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}
      initialValues={['Option 1', 'Option 4']}>
      <CheckBox value={''} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 1', 'Option 1')}</Typography>
      </CheckBox>
      <CheckBox value={'Option 2'} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 2', 'Option 2')}</Typography>
      </CheckBox>
      <CheckBox
        value={'Option 3'}
        containerStyle={{padding: 12}}
        selected={true}>
        <Typography font={font}>{text('Text 3', 'Option 3')}</Typography>
      </CheckBox>
      <CheckBox value={'Option 4'} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 4', 'Option 4')}</Typography>
      </CheckBox>
    </ControlsList>
  );
};

export default CheckboxListExample;
