import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

import {ISize, ITypes} from './types';

const sizeButtonStyle = (theme: IUseStylesTheme, size: ISize): ViewStyle => {
  switch (size) {
    case ISize.small:
      return {
        minHeight: theme.spaces.Space32,
        paddingVertical: theme.spaces.Space6,
        paddingHorizontal: theme.spaces.Space16,
      };
    case ISize.large:
      return {
        minHeight: theme.spaces.Space48,
        paddingVertical: theme.spaces.Space12,
        paddingHorizontal: theme.spaces.Space32,
      };
    case ISize.fixed:
      return {
        alignSelf: 'stretch',
        minHeight: theme.spaces.Space48,
      };
  }
};

const primaryStyle = (theme: IUseStylesTheme, size: ISize) => {
  const {colors} = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.CtaBtnPrimary,
      borderRadius: theme.spaces.Space12,

      ...sizeButtonStyle(theme, size),
    },

    text: {
      color: colors.TextWhite,
    },
    leftIcon: {
      paddingRight:
        size === ISize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
    rightIcon: {
      paddingLeft:
        size === ISize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
  });
};

const secondaryStyle = (theme: IUseStylesTheme, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);
  const {
    colors: {CtaBtnSecondary, TextAccent},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnSecondary;
  defaultStyles.text.color = TextAccent;

  return defaultStyles;
};

const tertiaryStyle = (theme: IUseStylesTheme, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);
  const {
    colors: {TextAccent},
  } = theme;

  defaultStyles.container.backgroundColor = 'transparent';
  defaultStyles.text.color = TextAccent;

  return defaultStyles;
};

const disabledStyle = (theme: IUseStylesTheme, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);
  const {
    colors: {CtaBtnMuted, TextWhite},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnMuted;
  defaultStyles.text.color = TextWhite;

  return defaultStyles;
};

const destructiveStyle = (theme: IUseStylesTheme, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);
  const {
    colors: {CtaBtnDestructive, TextWhite},
  } = theme;

  defaultStyles.container.backgroundColor = CtaBtnDestructive;
  defaultStyles.text.color = TextWhite;

  return defaultStyles;
};

const stylesCreate = (theme: IUseStylesTheme, type: ITypes, size: ISize) => {
  switch (type) {
    case ITypes.secondary:
      return secondaryStyle(theme, size);
    case ITypes.tertiary:
      return tertiaryStyle(theme, size);
    case ITypes.disabled:
      return disabledStyle(theme, size);
    case ITypes.destructive:
      return destructiveStyle(theme, size);
    case ITypes.primary:
    default:
      return primaryStyle(theme, size);
  }
};
export default stylesCreate;
