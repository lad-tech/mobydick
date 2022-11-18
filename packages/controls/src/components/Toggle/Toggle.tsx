import React, {FC, useRef} from 'react';
import {Animated, PanResponder} from 'react-native';
import {rem, useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import {IToggle} from './types';

const Toggle: FC<IToggle> = ({active, disabled}) => {
  const [styles, theme] = useStyles(stylesCreate, disabled);
  // const toggle = useToggle(active);
  const pan = useRef(new Animated.Value(active ? 30 : -30)).current;

  const leftPos = -30;
  const rightPos = 30;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onStartShouldSetPanResponder: () => true,
      // onPanResponderStart: event => {
      //   const touches = event.nativeEvent.touches;
      //   console.log('onPanResponderStart nativeEvent', event.nativeEvent);
      //   if (touches.length === 1) {
      //     if (pan._value === leftPos) {
      //       console.log('onPanResponderStart pan._value === -20');
      //       Animated.spring(pan, {
      //         toValue: rightPos,
      //         useNativeDriver: false,
      //       }).start();
      //     } else if (pan._value === rightPos) {
      //       console.log('onPanResponderStart pan._value === 20');
      //       Animated.spring(pan, {
      //         toValue: leftPos,
      //         useNativeDriver: false,
      //       }).start();
      //     }
      //   }
      // },

      onPanResponderMove: Animated.event([null, {dx: pan}], {
        useNativeDriver: false,
      }),
      // onPanResponderRelease: (evt, gestureState) => {
      //   pan.flattenOffset();
      //   console.log('onPanResponderRelease', gestureState);
      //
      //   if (pan._value < 0) {
      //     console.log('onPanResponderRelease pan._value < 0');
      //     Animated.spring(pan, {
      //       toValue: leftPos,
      //       useNativeDriver: false,
      //     }).start();
      //   } else if (pan._value >= 0) {
      //     console.log('onPanResponderRelease pan._value > 0');
      //     Animated.spring(pan, {
      //       toValue: rightPos,
      //       useNativeDriver: false,
      //     }).start();
      //   }
      // },
    }),
  ).current;

  const backgroundColor = pan.interpolate({
    inputRange: [leftPos, rightPos],
    outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
    extrapolate: 'clamp',
  });

  console.log('pan', pan);

  const translateX = pan.interpolate({
    inputRange: [leftPos, rightPos],
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
      needsOffscreenAlphaCompositing={true}
      {...panResponder.panHandlers}>
      <Animated.View style={[styles.switcher, {transform: [{translateX}]}]} />
    </Animated.View>
    // </Pressable>
  );
};

export default Toggle;
