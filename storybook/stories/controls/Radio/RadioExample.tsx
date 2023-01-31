import {boolean, text} from '@storybook/addon-knobs';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import stylesCreate from '../stylesCreate';
import {font, numberOfLines, optionOne, textOne} from '../constants';

import {Radio, View, useStyles, Typography} from '@npm/mobydick-core';

const RadioExample = () => {
  const [styles] = useStyles(stylesCreate);
  const [isSelected, setSelected] = useState(false);

  return (
    <View style={styles.listStyle}>
      <Radio
        value={optionOne}
        selected={isSelected}
        disabled={boolean('disabled', false)}
        onPress={() => {
          action('clicked radio');
          setSelected(!isSelected);
        }}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textOne, optionOne)}
        </Typography>
      </Radio>
    </View>
  );
};

export default RadioExample;
