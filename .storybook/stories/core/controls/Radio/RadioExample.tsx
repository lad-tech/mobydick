import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import stylesCreate from '../stylesCreate';
import {font, numberOfLines, optionOne} from '../constants';

import {Radio, Typography, useStyles, View} from '@lad-tech/mobydick-core';

const RadioExample = ({
  disabled,
  textOne,
}: {
  disabled: boolean;
  textOne: string;
}) => {
  const [styles] = useStyles(stylesCreate);
  const [isSelected, setSelected] = useState(false);

  return (
    <View style={styles.listStyle}>
      <Radio
        value={optionOne}
        selected={isSelected}
        disabled={disabled}
        onPress={() => {
          action('clicked radio');
          setSelected(!isSelected);
        }}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textOne}
        </Typography>
      </Radio>
    </View>
  );
};

export default RadioExample;
