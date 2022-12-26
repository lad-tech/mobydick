import React, {forwardRef} from 'react';
import {TouchableOpacity as DefaultTouchableOpacity} from 'react-native';

import {ITouchableOpacity, ITouchableOpacityProps} from './types';

const TouchableOpacity = forwardRef<ITouchableOpacity, ITouchableOpacityProps>(
  (props, ref) => <DefaultTouchableOpacity ref={ref} {...props} />,
);
export default TouchableOpacity;
