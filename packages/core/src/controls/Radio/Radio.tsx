import React, {FC} from 'react';

import {IControlProps} from '../types';
import Control from '../Control';
import ControlType from '../constants';
import useStyles from '../../styles/theme/hooks/useStyles';
import View from '../../basic/components/View/View';

import stylesCreate from './stylesCreate';
import {IRadioStyle} from './types';

const Radio: FC<IControlProps & IRadioStyle> = ({
  selected = false,
  disabled = false,
  children,
  containerStyle,
  ...rest
}) => {
  const [styles] = useStyles(stylesCreate, selected, disabled);
  return (
    <View
      style={[styles.container, containerStyle]}
      needsOffscreenAlphaCompositing={true}>
      <Control
        disabled={disabled}
        type={ControlType.radio}
        selected={selected}
        outerStyle={styles.circle}
        innerStyle={styles.innerCircle}
        {...rest}
      />
      {children}
    </View>
  );
};

export default Radio;
