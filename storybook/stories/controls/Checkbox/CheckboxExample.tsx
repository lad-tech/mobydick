import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {CheckBox} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import {View} from '@npm/mobydick-core';

const CheckboxExample = () => {
  return (
    <View style={{width: '90%'}}>
      <CheckBox
        value={'Pepe'}
        selected={boolean('selected', false)}
        disabled={boolean('disabled', false)}
        onPress={action('clicked checkbox')}>
        <Typography
          font={'Regular-Primary-M'}
          style={{flex: 1}}
          numberOfLines={2}>
          {text('Text', 'Option1')}
        </Typography>
      </CheckBox>
    </View>
  );
};

export default CheckboxExample;
