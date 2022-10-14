import React, {FC} from 'react';
import {IPressableProps, View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';

import stylesCreate from './stylesCreate';

const CheckBox: FC<IControlProps & IPressableProps> = ({children, ...rest}) => {
  const {disabled = false, selected = false, containerStyle} = rest;
  const [styles] = useStyles(stylesCreate, disabled, selected);
  return (
    <View style={[styles.container, containerStyle]}>
      <Control type={ControlType.checkBox} style={styles.checkbox} {...rest} />
      {children}
    </View>
  );
};

export default CheckBox;
