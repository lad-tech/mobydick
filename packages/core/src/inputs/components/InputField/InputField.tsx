import React, {forwardRef, useMemo, useState} from 'react';
import {Platform} from 'react-native';

import {IInputsTypes} from '../types';
import {InputSubtitle, InputTitle} from '../Base';
import {ITextInput} from '../../../basic/components/TextInput/types';
import View from '../../../basic/components/View/View';
import TextInput from '../../../basic/components/TextInput/TextInput';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {useFont} from '../../../typography/hooks/useFont';

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
    type = IInputsTypes.default,
    disabled = false,
    titleProps,
    subtitleIcon,
    subtitleProps,
    containerStyle,
    textInputContainerStyle,
    onFocus,
    onBlur,
    required,
    secureTextEntry,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const [styles, theme] = useStyles(
    stylesCreate,
    disabled ? IInputsTypes.disabled : type,
    focused,
  );
  const {fontStyle} = useFont('Regular-Primary-M');

  const getStyle = useMemo(() => {
    if (Platform.OS === 'android') {
      return [styles.androidTextInput];
    } else {
      return fontStyle;
    }
  }, [fontStyle.color]);

  return (
    <View style={[styles.container, containerStyle]}>
      {title && (
        <InputTitle title={title} titleProps={titleProps} required={required} />
      )}

      <View style={[styles.inputContainer, textInputContainerStyle]}>
        <TextInput
          ref={ref}
          testID={Constants.testID}
          style={[styles.textInput, getStyle, style]}
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
          selectionColor={theme.colors.IconBase}
          secureTextEntry={secureTextEntry}
          {...otherProps}
        />
        {rightIcon}
      </View>
      {subtitle ? (
        <InputSubtitle
          type={type}
          subtitle={subtitle}
          subtitleIcon={subtitleIcon}
          subtitleProps={subtitleProps}
        />
      ) : null}
    </View>
  );
});

export default InputField;
