import React from 'react';
import {useThrottle} from '@npm/mobydick-utils';
import {Button, ButtonProps} from '@npm/mobydick-cta';

const ButtonWithDelay = ({
  onPress = () => {
    console.log('biba');
  },
  ...otherProps
}: ButtonProps) => {
  const {throttledFn} = useThrottle(onPress);

  return <Button onPress={throttledFn} {...otherProps} text={'biba'} />;
};

export default ButtonWithDelay;
