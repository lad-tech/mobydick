import React, {FC} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {TextInputProps} from './types';

const TextInput: FC<TextInputProps> = props => {
  return <DefaultTextInput {...props} />;
};
export default TextInput;
