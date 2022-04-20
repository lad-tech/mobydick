import React, {forwardRef} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {TextInputProps} from './types';

const TextInput = forwardRef<DefaultTextInput, TextInputProps>((props, ref) => (
  <DefaultTextInput ref={ref} {...props} />
));
export default TextInput;
