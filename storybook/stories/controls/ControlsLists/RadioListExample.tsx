import {ControlsList, Radio} from '@npm/mobydick-controls';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import React from 'react';

const RadioListExample = () => {
  const font = 'Regular-Primary-M';

  return (
    <ControlsList
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}
      initialValues={['Option 1']}>
      <Radio value={'Option 1'} containerStyle={{padding: 12}}>
        <Typography font={font} numberOfLines={1}>
          {text('Text 1', 'Option 1')}
        </Typography>
      </Radio>
      <Radio value={'Option 2'} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 2', 'Option 2')}</Typography>
      </Radio>
      <Radio value={'Option 3'} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 3', 'Option 3')}</Typography>
      </Radio>
      <Radio value={'Option 4'} containerStyle={{padding: 12}}>
        <Typography font={font}>{text('Text 4', 'Option 4')}</Typography>
      </Radio>
    </ControlsList>
  );
};

export default RadioListExample;
