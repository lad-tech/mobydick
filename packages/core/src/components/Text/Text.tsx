import React, {FC} from 'react';
import {Text as DefaultText, TextProps as DefaultTextProps} from 'react-native';
type TextProps = DefaultTextProps;

const Text: FC<TextProps> = props => {
  return <DefaultText {...props} />;
};
export default Text;
