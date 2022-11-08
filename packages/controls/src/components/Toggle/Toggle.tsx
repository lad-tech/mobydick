import React, {FC, useRef} from 'react';
import {Animated, PanResponder} from 'react-native';
import {rem, useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import {IToggle} from './types';

const Toggle: FC<IToggle> = ({active, disabled}) => {
  const [styles, theme] = useStyles(stylesCreate, disabled);
  // const toggle = useToggle(active);
  const pan = useRef(new Animated.Value(active ? 20 : -20)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([null, {dx: pan}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  const backgroundColor = pan.interpolate({
    inputRange: [-20, 20],
    outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
    extrapolate: 'clamp',
  });

  const translateX = pan.interpolate({
    inputRange: [-20, 20],
    outputRange: [0, rem(20)],
    extrapolate: 'clamp',
  });
  //
  // const backgroundColor = toggle.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
  // });
  //
  // const translateX = pan.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, rem(20)],
  // });

  return (
    // <Pressable disabled={disabled} {...rest}>
    <Animated.View
      style={[styles.container, {backgroundColor}]}
      needsOffscreenAlphaCompositing={true}>
      <Animated.View
        style={[styles.switcher, {transform: [{translateX}]}]}
        {...panResponder.panHandlers}
      />
    </Animated.View>
    // </Pressable>
  );
};

export default Toggle;
