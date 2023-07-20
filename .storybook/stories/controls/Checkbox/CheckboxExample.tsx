import {boolean, text} from '@storybook/addon-knobs';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import {font, numberOfLines, optionOne, textOne} from '../constants';
import stylesCreate from '../stylesCreate';

import {CheckBox, View, useStyles, Typography} from '@lad-tech/mobydick-core';

const CheckboxExample = () => {
  const [styles] = useStyles(stylesCreate);
  const [isSelected, setSelected] = useState(false);

  return (
    <View style={styles.listStyle}>
      <CheckBox
        value={optionOne}
        selected={isSelected}
        disabled={boolean('disabled', false)}
        onPress={() => {
          action('clicked checkbox');
          setSelected(!isSelected);
        }}>
        <Typography
          font={font}
          style={styles.typographyStyle}
          numberOfLines={numberOfLines}>
          {text(textOne, optionOne)}
        </Typography>
      </CheckBox>
    </View>
  );
};

export default CheckboxExample;
