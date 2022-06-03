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
      borderRadius: 12, // TODO: Брать из theme
      padding: size === ISize.small ? 10 : 12, // TODO: Брать из theme
      margin: 12, // TODO: Брать из theme
    },
    text: {
      color: colors.TextWhite,
      marginHorizontal: 10,
      fontSize: 18, // TODO: Брать из theme
      fontWeight: '600', // TODO: Брать из theme
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
