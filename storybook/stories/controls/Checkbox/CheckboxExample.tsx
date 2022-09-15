import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {CheckBox} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {font, numberOfLines, optionOne, textOne} from '../constants';
import stylesCreate from '../stylesCreate';

const CheckboxExample = () => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.listStyle}>
      <CheckBox
        value={optionOne}
        selected={boolean('selected', false)}
        disabled={boolean('disabled', false)}
        onPress={action('clicked checkbox')}>
        <Typography
          font={font}
          style={styles.containerStyle}
          numberOfLines={numberOfLines}>
          {text(textOne, optionOne)}
        </Typography>
      </CheckBox>
    </View>
  );
};

export default CheckboxExample;
