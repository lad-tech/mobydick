import React from 'react';
import {useThrottle} from '@npm/mobydick-utils';
import {Button, IButtonProps} from '@npm/mobydick-core';

const ButtonWithDelay = ({
  onPress = () => {
    console.log('biba');
  },
  ...otherProps
}: IButtonProps) => {
  const {throttledFn} = useThrottle(onPress);

  return <Button onPress={throttledFn} {...otherProps} text={'biba'} />;
};

export default ButtonWithDelay;
