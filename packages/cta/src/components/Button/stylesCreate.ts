import {IUseStylesTheme, rem} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

import {ISize, ITypes} from './types';

const sizeButtonStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
): ViewStyle => {
  switch (size) {
    case ISize.small:
      return {
        minHeight: theme.spaces.Space32,
        paddingVertical: theme.spaces.Space6,
        paddingHorizontal: text
          ? theme.spaces.Space12
          : leftIcon || rightIcon
          ? rem(14)
          : theme.spaces.Space6,
      };
    case ISize.large:
      return {
        minHeight: theme.spaces.Space48,
        paddingVertical: theme.spaces.Space12,
        paddingHorizontal: text ? rem(26) : theme.spaces.Space12,
      };
    case ISize.fixed:
      return {
        alignSelf: 'stretch',
        minHeight: theme.spaces.Space48,
      };
    default:
      return {};
  }
};

const primaryStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  const {colors} = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.CtaBtnPrimary,
      borderRadius: theme.spaces.Space12,

      ...sizeButtonStyle(theme, size, leftIcon, rightIcon, text),
    },

    text: {
      color: colors.TextWhite,
      paddingHorizontal:
        size === ISize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
  });
};

const secondaryStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  const defaultStyles = primaryStyle(theme, size, leftIcon, rightIcon, text);
  const {
    colors: {CtaBtnSecondary, TextAccent},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnSecondary;
  defaultStyles.text.color = TextAccent;

  return defaultStyles;
};

const tertiaryStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  const defaultStyles = primaryStyle(theme, size, leftIcon, rightIcon, text);
  const {
    colors: {TextAccent},
  } = theme;

  defaultStyles.container.backgroundColor = 'transparent';
  defaultStyles.text.color = TextAccent;

  return defaultStyles;
};

const disabledStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  const defaultStyles = primaryStyle(theme, size, leftIcon, rightIcon, text);
  const {
    colors: {CtaBtnMuted, TextWhite},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnMuted;
  defaultStyles.text.color = TextWhite;

  return defaultStyles;
};

const destructiveStyle = (
  theme: IUseStylesTheme,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  const defaultStyles = primaryStyle(theme, size, leftIcon, rightIcon, text);
  const {
    colors: {CtaBtnDestructive, TextWhite},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnDestructive;
  defaultStyles.text.color = TextWhite;

  return defaultStyles;
};

const stylesCreate = (
  theme: IUseStylesTheme,
  type: ITypes,
  size: ISize,
  leftIcon: boolean,
  rightIcon: boolean,
  text: boolean,
) => {
  switch (type) {
    case ITypes.secondary:
      return secondaryStyle(theme, size, leftIcon, rightIcon, text);
    case ITypes.tertiary:
      return tertiaryStyle(theme, size, leftIcon, rightIcon, text);
    case ITypes.disabled:
      return disabledStyle(theme, size, leftIcon, rightIcon, text);
    case ITypes.destructive:
      return destructiveStyle(theme, size, leftIcon, rightIcon, text);
    case ITypes.primary:
    default:
      return primaryStyle(theme, size, leftIcon, rightIcon, text);
  }
};
export default stylesCreate;
