import {ITextInput, TextInput, View} from '@npm/mobydick-core';
import React, {forwardRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {useFont} from '@npm/mobydick-typography';

import stylesCreate from './stylesCreate';
import {IVerificationProps} from './types';

const CodeField = forwardRef<ITextInput, IVerificationProps>((props, ref) => {
  const {maxLength, textInputContainerStyle, style, ...otherProps} = props;
  const [focused, setFocused] = useState(false);
  const {fontStyle} = useFont('Regular-Primary-XL');
  const [styles, theme] = useStyles(stylesCreate, focused);
  return (
    <View style={[styles.inputContainer, textInputContainerStyle]}>
      <TextInput
        ref={ref}
        style={[styles.textInput, fontStyle, style]}
        placeholderTextColor={theme.colors.TextMuted}
        maxLength={maxLength || 1}
        keyboardType={'numeric'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
      />
    </View>
  );
});

export default CodeField;
