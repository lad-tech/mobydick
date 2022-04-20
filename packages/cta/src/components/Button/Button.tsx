import {Text, TouchableOpacity} from '@mobydick/core';
import React, {FC, useEffect, useRef} from 'react';
import {Loader as LoaderIcon, useTheme} from '@mobydick/styles';
import {Animated} from 'react-native';

import {ButtonProps, ITypes} from './types';
import stylesCreate from './stylesCreate';

// TODO: Возможно вынести в отдельный компонент, только не понятно куда
const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 2500,
      }),
    ).start();
  }, []);

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: rotation}]}}>
      <LoaderIcon />
    </Animated.View>
  );
};

const Button: FC<ButtonProps> = props => {
  const {
    style,
    text,
    leftIcon,
    rightIcon,
    type = ITypes.primary,
    loading = false,
    disabled = false,
    ...otherProps
  } = props;
  const theme = useTheme();
  const styles = stylesCreate(theme, disabled ? ITypes.disabled : type);

  const Container: FC = ({children}) => (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={
        loading ||
        disabled ||
        type === ITypes.disabled ||
        type === ITypes.loading
      }
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );

  if (loading || type === ITypes.loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <Container>
      {leftIcon}
      {Boolean(text) && <Text style={styles.text}>{text}</Text>}
      {rightIcon}
    </Container>
  );
};
export default Button;
