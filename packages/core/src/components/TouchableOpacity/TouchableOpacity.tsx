import React, {FC} from 'react';
import {TouchableOpacity as DefaultTouchableOpacity} from 'react-native';

import {TouchableOpacityProps} from './types';

const TouchableOpacity: FC<TouchableOpacityProps> = props => {
  return <DefaultTouchableOpacity {...props} />;
};
export default TouchableOpacity;
