import {forwardRef} from 'react';
import {TouchableHighlight as DefaultTouchableHighlight} from 'react-native';

import {ITouchableHighlight, TouchableHighlightProps} from './types';

const TouchableHighlight = forwardRef<
  ITouchableHighlight,
  TouchableHighlightProps
>((props, ref) => {
  return <DefaultTouchableHighlight {...props} ref={ref} />;
});
export default TouchableHighlight;
