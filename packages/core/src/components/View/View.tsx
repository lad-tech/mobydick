import React, {FC} from 'react';
import {View as DefaultView, ViewProps as DefaultViewProps} from 'react-native';
type ViewProps = DefaultViewProps;

const TextInput: FC<ViewProps> = props => {
  return <DefaultView {...props} />;
};

export default TextInput;
