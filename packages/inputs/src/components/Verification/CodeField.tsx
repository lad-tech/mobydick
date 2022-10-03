import {ITextInput, TextInput, View} from '@npm/mobydick-core';
import React, {forwardRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {useFont} from '@npm/mobydick-typography';

import stylesCreate from './stylesCreate';
import {ICodeFieldProps} from './types';
import {accessibilityLabels} from './constants';

const CodeField = forwardRef<ITextInput, ICodeFieldProps>((props, ref) => {
  const {
    maxLength,
    textInputContainerStyle,
    style,
    onChangeText,
    editable,
    onBackKeyPress,
    secureTextEntry,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const {fontStyle} = useFont('Regular-Primary-XL');
  const [styles, theme] = useStyles(stylesCreate, focused);

  return (
    <View style={[styles.inputContainer, textInputContainerStyle]}>
      <TextInput
        ref={ref}
        accessibilityLabel={accessibilityLabels.codeField}
        importantForAutofill={'no'}
        onChangeText={onChangeText}
        style={[styles.textInput, fontStyle, style]}
        placeholderTextColor={theme.colors.TextMuted}
        maxLength={maxLength || 1}
        keyboardType={'numeric'}
        editable={editable}
        secureTextEntry={secureTextEntry}
        allowFontScaling={false}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyPress={e => {
          if (onBackKeyPress && e.nativeEvent.key === 'Backspace')
            onBackKeyPress();
        }}
        {...otherProps}
      />
    </View>
  );
});

export default CodeField;
