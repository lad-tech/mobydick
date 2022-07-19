import React, {forwardRef} from 'react';
import {Pressable as DefaultPressable} from 'react-native';

import {IView} from '../View';

import {IPressableProps} from './types';

const Pressable = forwardRef<IView, IPressableProps>((props, ref) => {
  return <DefaultPressable ref={ref} {...props} />;
});

export default Pressable;
