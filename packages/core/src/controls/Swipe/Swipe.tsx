import React, {FC, useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';

import useStyles from '../../styles/theme/hooks/useStyles';
import rem from '../../styles/spaces/rem';
import {LABELS} from '../../other';

import stylesCreate from './stylesCreate';
import {ISwipe} from './types';

const leftPos = -20;
const rightPos = 20;

const Swipe: FC<ISwipe> = ({active, disabled, onPress}) => {
  const [styles, theme] = useStyles(stylesCreate, disabled);
  const defaultState = active ? rightPos : leftPos;

  const pan = useRef(new Animated.Value(defaultState)).current;
  const distance = useRef<number>(defaultState);

  useEffect(() => {
    if (disabled) {
      return;
    }
    if (active) {
      return swipeRight();
    } else {
      return swipeLeft();
    }
  }, [active, disabled]);

  const swipeRight = () => {
    distance.current = rightPos;
    onPress(true);
    Animated.timing(pan, {
      toValue: +rightPos,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const swipeLeft = () => {
    distance.current = leftPos;
    onPress(false);
    Animated.timing(pan, {
      toValue: +leftPos,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const handlePanResponderRelease = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    pan.flattenOffset();

    if (gestureState.dx === 0) {
      if (distance.current > 0) {
        return swipeLeft();
      } else {
        return swipeRight();
      }
    }

    distance.current = gestureState.dx;
    if (distance.current > 0) {
      return swipeRight();
    } else {
      return swipeLeft();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,

      onPanResponderGrant: () => {
        pan.setOffset(distance.current);
      },

      onPanResponderMove: Animated.event([null, {dx: pan}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: handlePanResponderRelease,
    }),
  ).current;

  const backgroundColor = pan.interpolate({
    inputRange: [leftPos, rightPos],
    outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
    extrapolate: 'clamp',
  });

  const translateX = pan.interpolate({
    inputRange: [leftPos, rightPos],
    outputRange: [0, rem(20)],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, {backgroundColor}]}
      needsOffscreenAlphaCompositing={true}
      accessibilityLabel={LABELS.swipe}
      {...panResponder.panHandlers}>
      <Animated.View style={[styles.switcher, {transform: [{translateX}]}]} />
    </Animated.View>
  );
};

export default Swipe;
