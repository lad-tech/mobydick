import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

import {ITypes} from './types';

const primaryStyle = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: theme.CtaBtnPrimary,
      borderRadius: 12, // TODO: Брать из theme
      padding: 12, // TODO: Брать из theme
      margin: 12, // TODO: Брать из theme
    },
    text: {
      color: theme.TextWhite,
      marginHorizontal: 10,
      fontSize: 18, // TODO: Брать из theme
      fontWeight: '600', // TODO: Брать из theme
    },
  });

const secondaryStyle = (theme: ReturnType<typeof useTheme>) => {
  const defaultStyles = primaryStyle(theme);

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

const tertiaryStyle = (theme: ReturnType<typeof useTheme>) => {
  const defaultStyles = primaryStyle(theme);

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

const disabledStyle = (theme: ReturnType<typeof useTheme>) => {
  const defaultStyles = primaryStyle(theme);

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

const stylesCreate = (theme: ReturnType<typeof useTheme>, type: ITypes) => {
  switch (type) {
    case ITypes.primary:
      return primaryStyle(theme);
    case ITypes.secondary:
      return secondaryStyle(theme);
    case ITypes.tertiary:
      return tertiaryStyle(theme);
    case ITypes.disabled:
      return disabledStyle(theme);
    default:
      return primaryStyle(theme);
  }
};
export default stylesCreate;
