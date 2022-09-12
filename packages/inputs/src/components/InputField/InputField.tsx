import {ITextInput, TextInput, View} from '@npm/mobydick-core';
import React, {forwardRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography, useFont} from '@npm/mobydick-typography';

import {ITypes} from '../types';
import Subtitle from '../Subtitle';

import {IInputFieldsProps} from './types';
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
const InputField = forwardRef<ITextInput, IInputFieldsProps>((props, ref) => {
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
    onFocus,
    onBlur,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const {fontStyle} = useFont('Regular-Primary-M');
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
      <View style={[styles.inputContainer, textInputContainerStyle]}>
        <TextInput
          ref={ref}
          testID={Constants.testID}
          style={[styles.textInput, fontStyle, style]}
          placeholderTextColor={theme.colors.TextMuted}
          editable={!disabled}
          numberOfLines={1}
          onFocus={event => {
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={event => {
            setFocused(false);
            onBlur?.(event);
          }}
          {...otherProps}
        />
        {rightIcon}
      </View>
      {subtitle ? (
        <Subtitle
          type={type}
          subtitle={subtitle}
          subtitleProps={subtitleProps}
        />
      ) : null}
    </View>
  );
});

export default InputField;
