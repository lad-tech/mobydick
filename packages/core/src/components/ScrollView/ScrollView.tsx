import React, {FC} from 'react';
import {
  ScrollView as DefaultScrollView,
  ScrollViewProps as DefaultScrollViewProps,
} from 'react-native';

type ScrollViewProps = DefaultScrollViewProps;

const ScrollView: FC<ScrollViewProps> = props => {
  return <DefaultScrollView {...props} />;
};
export default ScrollView;
