import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {Radio} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from '../stylesCreate';
import {font, numberOfLines, optionOne, textOne} from '../constants';

const RadioExample = () => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.listStyle}>
      <Radio
        value={optionOne}
        selected={boolean('selected', false)}
        disabled={boolean('disabled', false)}
        onPress={action('clicked radio')}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.containerStyle}>
          {text(textOne, optionOne)}
        </Typography>
      </Radio>
    </View>
  );
};

export default RadioExample;
