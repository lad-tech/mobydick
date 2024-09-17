import {forwardRef, useCallback, useMemo, useState} from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  TextInputFocusEventData,
} from 'react-native';

import {IInputsTypes} from '../types';
import {InputSubtitle, InputTitle} from '../Base';
import {ITextInput} from '../../../basic/components/TextInput/types';
import View from '../../../basic/components/View/View';
import TextInput from '../../../basic/components/TextInput/TextInput';
import useStyles from '../../../styles/hooks/useStyles';
import {useFont} from '../../../typography/hooks/useFont';
import px from '../../../styles/utils/px';

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
    leftIcon,
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
    multiline = false,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const [styles, theme] = useStyles(
    stylesCreate,
    disabled ? IInputsTypes.disabled : type,
    focused,
    multiline,
  );
  const {fontStyle} = useFont('Regular-Primary-M');

  const getStyle = useMemo(() => {
    if (Platform.OS === 'android') {
      return [styles.androidTextInput];
    } else {
      return fontStyle;
    }
  }, [fontStyle.color]);

  const onFocusInput = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus],
  );

  const onBlurInput = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur],
  );
  const getHeight = () => {
    return multiline ? {minHeight: px(80)} : {height: px(48)};
  };

  const getPadding = useCallback(() => {
    return rightIcon ? {paddingRight: px(16)} : null;
  }, [rightIcon]);

  return (
    <View style={[styles.container, containerStyle]} accessible={true}>
      {title && (
        <InputTitle title={title} titleProps={titleProps} required={required} />
      )}

      <View
        style={[
          styles.inputContainer,
          getHeight(),
          getPadding(),
          textInputContainerStyle,
        ]}>
        {leftIcon}
        <TextInput
          ref={ref}
          testID={Constants.testID}
          style={[styles.textInput, getStyle, style]}
          placeholderTextColor={theme.colors.TextMuted}
          editable={!disabled}
          numberOfLines={1}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          selectionColor={theme.colors.IconBase}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
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
