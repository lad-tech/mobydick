import React, {FC} from 'react';
import {TouchableHighlight as DefaultTouchableHighlight} from 'react-native';

import {TouchableHighlightProps} from './types';

const TouchableHighlight: FC<TouchableHighlightProps> = props => {
  return <DefaultTouchableHighlight {...props} />;
};
export default TouchableHighlight;
