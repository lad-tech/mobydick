import React, {FC} from 'react';
import {ScrollView as DefaultScrollView} from 'react-native';

import {ScrollViewProps} from './types';

const ScrollView: FC<ScrollViewProps> = props => {
  return <DefaultScrollView {...props} />;
};
export default ScrollView;
