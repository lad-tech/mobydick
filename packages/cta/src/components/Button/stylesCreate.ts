import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ISize, ITypes} from './types';

const primaryStyle = (theme: IUseStylesTheme, size: ISize) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      alignSelf: size === ISize.fixed ? 'stretch' : undefined,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: colors.CtaBtnPrimary,
      borderRadius: theme.spaces.Space12,
      minHeight:
        size === ISize.small ? theme.spaces.Space32 : theme.spaces.Space48,
      paddingVertical:
        size === ISize.small ? theme.spaces.Space6 : theme.spaces.Space12,
      paddingHorizontal:
        size === ISize.small ? theme.spaces.Space16 : theme.spaces.Space32,
    },
    text: {
      color: colors.TextWhite,
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
  const {colors} = theme;

  defaultStyles.container.backgroundColor = 'transparent';
  defaultStyles.text.color = colors.TextAccent;

  return defaultStyles;
};

const disabledStyle = (theme: IUseStylesTheme, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);
  const {colors} = theme;

  defaultStyles.container.backgroundColor = colors.CtaBtnMuted;
  defaultStyles.text.color = colors.TextWhite;

  return defaultStyles;
};

const stylesCreate = (theme: IUseStylesTheme, type: ITypes, size: ISize) => {
  switch (type) {
    case ITypes.primary:
      return primaryStyle(theme, size);
    case ITypes.secondary:
      return secondaryStyle(theme, size);
    case ITypes.tertiary:
      return tertiaryStyle(theme, size);
    case ITypes.disabled:
      return disabledStyle(theme, size);
    default:
      return primaryStyle(theme, size);
  }
};
export default stylesCreate;
