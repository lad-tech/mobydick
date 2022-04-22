import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

import {ISize, ITypes} from './types';

const primaryStyle = (theme: ReturnType<typeof useTheme>, size: ISize) =>
  StyleSheet.create({
    container: {
      alignSelf: size === ISize.fixed ? 'stretch' : undefined,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: theme.CtaBtnPrimary,
      borderRadius: 12, // TODO: Брать из theme
      padding: size === ISize.small ? 10 : 12, // TODO: Брать из theme
      margin: 12, // TODO: Брать из theme
    },
    text: {
      color: theme.TextWhite,
      marginHorizontal: 10,
      fontSize: 18, // TODO: Брать из theme
      fontWeight: '600', // TODO: Брать из theme
    },
  });

const secondaryStyle = (theme: ReturnType<typeof useTheme>, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: theme.CtaBtnSecondary,
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: theme.TextAccent,
  };

  return defaultStyles;
};

const tertiaryStyle = (theme: ReturnType<typeof useTheme>, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: 'transparent',
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: theme.TextAccent,
  };

  return defaultStyles;
};

const disabledStyle = (theme: ReturnType<typeof useTheme>, size: ISize) => {
  const defaultStyles = primaryStyle(theme, size);

  defaultStyles.container = {
    ...defaultStyles.container,
    backgroundColor: theme.CtaBtnMuted,
  };

  defaultStyles.text = {
    ...defaultStyles.text,
    color: theme.TextWhite,
  };

  return defaultStyles;
};

const stylesCreate = (
  theme: ReturnType<typeof useTheme>,
  type: ITypes,
  size: ISize,
) => {
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
