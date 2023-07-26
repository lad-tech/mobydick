import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import {font, numberOfLines, optionOne} from '../constants';
import stylesCreate from '../stylesCreate';

import {CheckBox, Typography, useStyles, View} from '@lad-tech/mobydick-core';

const CheckboxExample = ({
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
      <CheckBox
        value={optionOne}
        selected={isSelected}
        disabled={disabled}
        onPress={() => {
          action('clicked checkbox');
          setSelected(!isSelected);
        }}>
        <Typography
          font={font}
          style={styles.typographyStyle}
          numberOfLines={numberOfLines}>
          {textOne}
        </Typography>
      </CheckBox>
    </View>
  );
};

export default CheckboxExample;
