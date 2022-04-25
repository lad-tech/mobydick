import {ITextInput, Text, TextInput, View} from '@mobydick/core';
import React, {forwardRef, useState} from 'react';
import {useTheme} from '@mobydick/styles';

import {InputFieldProps, ITypes} from './types';
import stylesCreate from './stylesCreate';
import Constants from './constants';

/**
 * Пример использования ref:
 * ```
 * const biba = () => {
 *   const ref = useRef<ITextInput>(null);
 *   const boba = () => {
 *     ref.current?.isFocused();
 *   };
 *   return (
 *     <InputField ref={ref} /> />
 *   );
 * };
 * ```
 */
const InputField = forwardRef<ITextInput, InputFieldProps>((props, ref) => {
  const {
    style,
    title,
    subtitle,
    rightIcon,
    type = ITypes.default,
    disabled = false,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const theme = useTheme();
  const styles = stylesCreate(
    theme,
    disabled ? ITypes.disabled : type,
    focused,
  );

  return (
    <View>
      {Boolean(title) && <Text style={styles.label}>{title}</Text>}
      <View style={styles.textInputContainer}>
        <TextInput
          ref={ref}
          testID={Constants.testID}
          style={[styles.textInput, style]}
          placeholderTextColor={theme.TextTertiary}
          editable={!disabled}
          numberOfLines={1}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
          }}
          {...otherProps}
        />
        {rightIcon}
      </View>
      {Boolean(subtitle) && (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
      )}
    </View>
  );
});

export default InputField;
