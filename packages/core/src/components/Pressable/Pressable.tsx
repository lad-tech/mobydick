import React from 'react';
import {Pressable as DefaultPressable} from 'react-native';

import {PressableProps} from './types';

const Pressable = (props: PressableProps) => {
  return <DefaultPressable {...props} />;
};

export default Pressable;
