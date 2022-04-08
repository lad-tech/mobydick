import React, {FC} from 'react';
import {
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableOpacityProps as DefaultTouchableOpacityProps,
} from 'react-native';
type TouchableOpacityProps = DefaultTouchableOpacityProps;

const TouchableOpacity: FC<TouchableOpacityProps> = props => {
  return <DefaultTouchableOpacity {...props} />;
};
export default TouchableOpacity;
