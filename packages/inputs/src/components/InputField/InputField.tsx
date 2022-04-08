import {TextInput, TextInputProps} from '@mobydick/core';
import React, {FC} from 'react';
import useTheme from '@mobydick/styles/src/theme/useTheme';

import styles from './styles';

const InputField: FC<TextInputProps> = props => {
  const {style, ...otherProps} = props;
  const theme = useTheme();

  return (
    <TextInput
      style={[styles(theme).container, style]}
      placeholderTextColor={theme.TextTertiary}
      {...otherProps}
    />
  );
};
export default InputField;
