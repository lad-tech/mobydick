import React, {FC} from 'react';
import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
} from 'react-native';
type TextInputProps = DefaultTextInputProps;

const TextInput: FC<TextInputProps> = props => {
  return <DefaultTextInput {...props} />;
};
export default TextInput;
