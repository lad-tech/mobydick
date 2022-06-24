import React, {FC} from 'react';
import {Animated} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';
import {Text, View} from '@npm/mobydick-core';
import {ITooltip} from '@npm/mobydick-popups/src/components/Tooltip/types';

import stylesCreate from './stylesCreate';

const Tooltip: FC<ITooltip> = props => {
  const {
    message,
    position,
    styleContainer,
    arrowStyle,
    textStyle,
    isArrow,
    children,
  } = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View
      style={[
        styles.container,
        styleContainer,
        position && {
          position: 'absolute',
          top: position?.top,
          bottom: position?.bottom,
          left: position?.left,
          right: position?.right,
        },
      ]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
      {isArrow && <View style={[styles.arrow, arrowStyle]} />}
      {children}
    </Animated.View>
  );
};

export default Tooltip;
