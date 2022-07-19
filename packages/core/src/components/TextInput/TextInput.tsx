import React, {forwardRef} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {getConfig} from '../../config';

import {TextInputProps, ITextInput} from './types';

const TextInput = forwardRef<ITextInput, TextInputProps>((props, ref) => (
  <DefaultTextInput
    ref={ref}
    allowFontScaling={getConfig().allowFontScaling}
    {...props}
  />
));
export default TextInput;
