import {ITextInput, TextInput, View} from '@npm/mobydick-core';
import React, {forwardRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

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
    titleProps,
    subtitleProps,
    containerStyle,
    textInputContainerStyle,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const [styles, theme] = useStyles(
    stylesCreate,
    disabled ? ITypes.disabled : type,
    focused,
  );

  return (
    <View style={containerStyle}>
      {Boolean(title) && (
        <Typography font={'Medium-Tertiary-XS'} {...titleProps}>
          {title}
        </Typography>
      )}
      <View style={[styles.textInputContainer, textInputContainerStyle]}>
        <TextInput
          ref={ref}
          testID={Constants.testID}
          style={[styles.textInput, style]}
          placeholderTextColor={theme.colors.TextTertiary}
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
        <Typography
          font={
            type === ITypes.wrong ? 'Regular-Error-XXS' : 'Regular-Muted-XXS'
          }
          {...subtitleProps}>
          {subtitle}
        </Typography>
      )}
    </View>
  );
});

export default InputField;
