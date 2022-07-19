import React, {FC} from 'react';
import {PressableProps, View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';

import stylesCreate from './stylesCreate';

const CheckBox: FC<IControlProps & PressableProps> = ({children, ...rest}) => {
  const {disabled, selected} = rest;
  const [styles] = useStyles(stylesCreate, disabled, selected);
  return (
    <View style={styles.container}>
      <Control type={ControlType.checkBox} style={styles.checkbox} {...rest} />
      {children}
    </View>
  );
};

export default CheckBox;
