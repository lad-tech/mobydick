import React, {FC, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {useToggle} from '@npm/mobydick-utils';

import useStyles from '../../styles/theme/hooks/useStyles';
import rem from '../../styles/spaces/rem';
import Pressable from '../../basic/components/Pressable/Pressable';
import {LABELS} from '../../other';

import stylesCreate from './stylesCreate';
import {IToggle} from './types';

const Toggle: FC<IToggle> = ({active, disabled, onPress, ...rest}) => {
  const [styles, theme] = useStyles(stylesCreate, disabled);
  const [state, toggle] = useToggle(active);
  const toValue = state ? 1 : 0;
  const animatedValue = useRef(new Animated.Value(toValue)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, [toValue]);

  useEffect(() => {
    onPress(state);
  }, [state]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, rem(20)],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
  });

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        toggle();
      }}
      accessibilityLabel={LABELS.togglePress}
      {...rest}>
      <Animated.View
        style={[styles.container, {backgroundColor}]}
        needsOffscreenAlphaCompositing={true}>
        <Animated.View style={[styles.switcher, {transform: [{translateX}]}]} />
      </Animated.View>
    </Pressable>
  );
};

export default Toggle;
