import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import useTheme from '../../../styles/theme/hooks/useTheme';

import Loader from './Loader';
import {ISizeSpinner, SpinnerProps} from './types';

const Spinner: FC<SpinnerProps> = props => {
  const {duration = 2500, size = ISizeSpinner.S, fill, ...otherProps} = props;
  const {colors} = useTheme();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spinValue, {
        useNativeDriver: true,
        toValue: 1,
        duration,
      }),
    );
    loop.start();
    return () => {
      loop.stop();
      spinValue.setValue(0);
    };
  }, [duration]);

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{alignSelf: 'center', transform: [{rotate: rotation}]}}>
      <Loader size={size} fill={fill || colors.ElementBase} {...otherProps} />
    </Animated.View>
  );
};

export default Spinner;
