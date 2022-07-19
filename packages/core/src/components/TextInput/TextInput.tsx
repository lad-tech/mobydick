import React, {forwardRef} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {TextInputProps, ITextInput} from './types';

const TextInput = forwardRef<ITextInput, TextInputProps>((props, ref) => (
  <DefaultTextInput ref={ref} {...props} />
));
export default TextInput;
