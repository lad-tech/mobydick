import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

import {ISize, ITypes} from './types';

const primaryStyle = (themeColors: ICurrentThemeColors, size: ISize) =>
  StyleSheet.create({
    container: {
      alignSelf: size === ISize.fixed ? 'stretch' : undefined,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: themeColors.CtaBtnPrimary,
      borderRadius: 12, // TODO: Брать из theme
      padding: size === ISize.small ? 10 : 12, // TODO: Брать из theme
      margin: 12, // TODO: Брать из theme
    },
    text: {
      color: themeColors.TextWhite,
      marginHorizontal: 10,
      fontSize: 18, // TODO: Брать из theme
      fontWeight: '600', // TODO: Брать из theme
    },
  });

const secondaryStyle = (themeColors: ICurrentThemeColors, size: ISize) => {
  const defaultStyles = primaryStyle(themeColors, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: themeColors.CtaBtnSecondary,
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: themeColors.TextAccent,
  };

  return defaultStyles;
};

const tertiaryStyle = (themeColors: ICurrentThemeColors, size: ISize) => {
  const defaultStyles = primaryStyle(themeColors, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: 'transparent',
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: themeColors.TextAccent,
  };

  return defaultStyles;
};

const disabledStyle = (themeColors: ICurrentThemeColors, size: ISize) => {
  const defaultStyles = primaryStyle(themeColors, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: themeColors.CtaBtnMuted,
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: themeColors.TextWhite,
  };

  return defaultStyles;
};

const stylesCreate = (
  themeColors: ICurrentThemeColors,
  type: ITypes,
  size: ISize,
) => {
  switch (type) {
    case ITypes.primary:
      return primaryStyle(themeColors, size);
    case ITypes.secondary:
      return secondaryStyle(themeColors, size);
    case ITypes.tertiary:
      return tertiaryStyle(themeColors, size);
    case ITypes.disabled:
      return disabledStyle(themeColors, size);
    default:
      return primaryStyle(themeColors, size);
  }
};
export default stylesCreate;
