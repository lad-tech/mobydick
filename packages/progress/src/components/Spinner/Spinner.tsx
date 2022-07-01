import {useStyles, Loader as LoaderIcon} from '@npm/mobydick-styles';
import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import stylesCreate from './stylesCreate';
import {SpinnerProps} from './types';

const Spinner: FC<SpinnerProps> = props => {
  const {style, speed = 2500, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);
  const spinValue = useRef(new Animated.Value(0)).current;

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
      <LoaderIcon style={[styles.container, style]} {...otherProps} />
    </Animated.View>
  );
};

export default Spinner;
