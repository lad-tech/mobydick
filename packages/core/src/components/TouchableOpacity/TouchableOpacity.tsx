import React, {forwardRef} from 'react';
import {TouchableOpacity as DefaultTouchableOpacity} from 'react-native';

import {ITouchableOpacity, TouchableOpacityProps} from './types';

const TouchableOpacity = forwardRef<ITouchableOpacity, TouchableOpacityProps>(
  (props, ref) => {
    return <DefaultTouchableOpacity ref={ref} {...props} />;
  },
);
export default TouchableOpacity;
