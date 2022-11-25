import React, {FC} from 'react';
import {Pressable} from '@npm/mobydick-core';
import {Animated} from 'react-native';
import {rem, useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import useToggle from './useToggle';
import {IToggle} from './types';

const Toggle: FC<IToggle> = ({active, disabled, ...rest}) => {
  const [styles, theme] = useStyles(stylesCreate, disabled);
  const toggle = useToggle(active);

  const translateX = toggle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, rem(20)],
  });

  const backgroundColor = toggle.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
  });

  return (
    <Pressable disabled={disabled} {...rest}>
      <Animated.View
        style={[styles.container, {backgroundColor}]}
        needsOffscreenAlphaCompositing={true}>
        <Animated.View style={[styles.switcher, {transform: [{translateX}]}]} />
      </Animated.View>
    </Pressable>
  );
};

export default Toggle;
