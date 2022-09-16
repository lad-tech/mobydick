import {Animated, Easing} from 'react-native';
import {useEffect, useRef} from 'react';

const useToggle = (active: boolean) => {
  const animatedValue = useRef(new Animated.Value(+active)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: +active,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, [active]);

  return animatedValue;
};

export default useToggle;
