import {FC, useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';

import useStyles from '../../styles/hooks/useStyles';
import {LABELS} from '../../other';
import px from '../../styles/utils/px';

import stylesCreate from './stylesCreate';
import {ISwipe} from './types';

const leftPos = -20;
const rightPos = 20;

const Swipe: FC<ISwipe> = ({
  active,
  disabled,
  onPress,
  activeColor,
  passiveColor,
  containerStyle,
  switcherStyle,
}) => {
  const [styles, {colors}] = useStyles(stylesCreate, disabled);
  const defaultState = active ? rightPos : leftPos;

  const pan = useRef(new Animated.Value(defaultState)).current;
  const distance = useRef<number>(defaultState);

  useEffect(() => {
    if (active) {
      return swipeRight();
    } else {
      return swipeLeft();
    }
  }, [active, disabled]);

  const swipeRight = () => {
    distance.current = rightPos;
    Animated.timing(pan, {
      toValue: +rightPos,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const swipeLeft = () => {
    distance.current = leftPos;
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
      onPress(distance.current > 0 ? false : true);
      return distance.current > 0 ? swipeLeft() : swipeRight();
    }

    if (gestureState.dx > 0) {
      distance.current !== rightPos && onPress(true);
      return swipeRight();
    } else {
      distance.current !== leftPos && onPress(false);
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
    outputRange: [
      passiveColor || colors.ElementMuted,
      activeColor || colors.ElementBase,
    ],
    extrapolate: 'clamp',
  });

  const translateX = pan.interpolate({
    inputRange: [leftPos, rightPos],
    outputRange: [0, px(20)],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, containerStyle, {backgroundColor}]}
      needsOffscreenAlphaCompositing={true}
      accessibilityLabel={LABELS.swipe}
      {...panResponder.panHandlers}>
      <Animated.View
        style={[styles.switcher, switcherStyle, {transform: [{translateX}]}]}
      />
    </Animated.View>
  );
};

export default Swipe;
