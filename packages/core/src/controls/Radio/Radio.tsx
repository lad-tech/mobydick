import React, {FC} from 'react';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';
import useStyles from '../../styles/theme/hooks/useStyles';
import {Pressable} from '../../basic/components/Pressable';

import stylesCreate from './stylesCreate';
import {IRadioStyle} from './types';

const Radio: FC<IControlProps & IRadioStyle> = ({
  selected = false,
  disabled = false,
  children,
  containerStyle,
  onPress,
  ...rest
}) => {
  const [styles] = useStyles(stylesCreate, selected, disabled);
  return (
    <Pressable
      style={[styles.container, containerStyle]}
      needsOffscreenAlphaCompositing={true}
      onPress={onPress}>
      <Control
        disabled={disabled}
        type={ControlType.radio}
        selected={selected}
        outerStyle={styles.circle}
        innerStyle={styles.innerCircle}
        onPress={onPress}
        {...rest}
      />
      {children}
    </Pressable>
  );
};

export default Radio;
