import {Text, TextInput, View} from '@mobydick/core';
import React, {FC} from 'react';
import {useTheme, Show} from '@mobydick/styles';

import {InputFieldProps} from './types';
import styles from './styles';

const InputField: FC<InputFieldProps> = props => {
  const {style, title, underInputText, ...otherProps} = props;
  const theme = useTheme();

  return (
    <View>
      <Text style={styles(theme).label}>{title}</Text>
      <TextInput
        style={[styles(theme).textInput, style]}
        placeholderTextColor={theme.TextTertiary}
        {...otherProps}
      />
      <Show />
      <Text style={styles(theme).underInputText}>{underInputText}</Text>
    </View>
  );
};
export default InputField;
