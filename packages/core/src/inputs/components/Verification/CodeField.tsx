import React, {forwardRef, useCallback, useState} from 'react';

import {ITextInput} from '../../../basic/components/TextInput/types';
import {useFont} from '../../../typography';
import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';
import TextInput from '../../../basic/components/TextInput/TextInput';
import {LABELS} from '../../../other';

import {ICodeFieldProps} from './types';
import stylesCreate from './stylesCreate';

const CodeField = forwardRef<ITextInput, ICodeFieldProps>((props, ref) => {
  const {
    maxLength,
    textInputContainerStyle,
    style,
    onChangeText,
    editable,
    onBackKeyPress,
    secureTextEntry,
    fontStyleCodeField,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const {fontStyle} = useFont(
    fontStyleCodeField ? fontStyleCodeField : 'Regular-Primary-XL',
  );
  const [styles, theme] = useStyles(stylesCreate, focused);

  const onFocus = useCallback(() => setFocused(true), []);
  const onBlur = useCallback(() => setFocused(false), []);
  const onKeyPress = useCallback(
    e => {
      if (onBackKeyPress && e.nativeEvent.key === 'Backspace') {
        onBackKeyPress();
      }
    },
    [onBackKeyPress],
  );

  return (
    <View style={[styles.inputContainer, textInputContainerStyle]}>
      <TextInput
        ref={ref}
        accessibilityLabel={LABELS.codeField}
        importantForAutofill={'no'}
        onChangeText={onChangeText}
        style={[styles.textInput, fontStyle, style]}
        placeholderTextColor={theme.colors.TextMuted}
        maxLength={maxLength || 1}
        keyboardType={'numeric'}
        editable={editable}
        secureTextEntry={secureTextEntry}
        allowFontScaling={false}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        selectionColor={theme.colors.IconBase}
        {...otherProps}
      />
    </View>
  );
});

export default CodeField;
