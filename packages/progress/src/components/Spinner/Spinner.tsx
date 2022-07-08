import {LoaderS, LoaderM, LoaderL, useTheme} from '@npm/mobydick-styles';
import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Color} from 'react-native-svg';

import {ISizeSpinner, SpinnerProps} from './types';

const Spinner: FC<SpinnerProps> = props => {
  const {speed = 2500, size = ISizeSpinner.S, fill, ...otherProps} = props;
  const {colors} = useTheme();
  const spinValue = useRef(new Animated.Value(0)).current;

  const getSize = (size: ISizeSpinner, color: Color) => {
    switch (size) {
      case ISizeSpinner.S:
        return <LoaderS fill={color} {...otherProps} />;
      case ISizeSpinner.M:
        return <LoaderM fill={color} {...otherProps} />;
      case ISizeSpinner.L:
        return <LoaderL fill={color} {...otherProps} />;
    }
  };

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spinValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: speed,
      }),
    );
    loop.start();
    return () => {
      loop.stop();
      spinValue.setValue(0);
    };
  }, [speed]);

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: rotation}]}}>
      {getSize(size, fill || colors.ElementBase)}
    </Animated.View>
  );
};

export default Spinner;
