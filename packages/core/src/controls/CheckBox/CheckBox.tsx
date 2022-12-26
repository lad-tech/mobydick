import React, {FC} from 'react';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';
import {View} from '../../basic/components/View';
import {IPressableProps} from '../../basic/components/Pressable';
import useStyles from '../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';

const CheckBox: FC<IControlProps & IPressableProps> = ({children, ...rest}) => {
  const {disabled, selected, containerStyle} = rest;
  const [styles] = useStyles(stylesCreate, disabled, selected);
  return (
    <View style={[styles.container, containerStyle]}>
      <Control type={ControlType.checkBox} style={styles.checkbox} {...rest} />
      {children}
    </View>
  );
};

export default CheckBox;
