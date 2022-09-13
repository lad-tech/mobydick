import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {Radio} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import {View} from '@npm/mobydick-core';

const RadioExample = () => {
  return (
    <View style={{width: '90%'}}>
      <Radio
        value={'Pepe'}
        selected={boolean('selected', false)}
        disabled={boolean('disabled', false)}
        onPress={action('clicked radio')}>
        <Typography
          font={'Regular-Primary-M'}
          numberOfLines={2}
          style={{flex: 1}}>
          {text('Text', 'Option1 аивирсрииырисрыисрыисриыррсыичсиисисссис')}
        </Typography>
      </Radio>
    </View>
  );
};

export default RadioExample;
