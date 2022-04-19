import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

import {ITypes} from './types';

const defaultStyle = (theme: ReturnType<typeof useTheme>, focused: boolean) =>
  StyleSheet.create({
    label: {
      color: theme.TextTertiary,
      fontSize: 14, // TODO: Брать из темы, когда они будут готовы,
      fontWeight: '500', // TODO: Брать из темы, когда они будут готовы,
    },
    textInputContainer: {
      backgroundColor: theme.BgSecondary,
      padding: 10, // TODO: Брать из темы, когда они будут готовы
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      borderWidth: 1,
      borderColor: focused ? theme.BorderNormal : 'transparent',
      marginVertical: 8, // TODO: Брать из темы, когда они будут готовы
      minWidth: 120,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
    },
    subtitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subtitleText: {
      color: theme.TextMuted,
      fontSize: 12, // TODO: Брать из темы, когда они будут готовы
      fontWeight: '400',
    },
  });

const validStyle = (theme: ReturnType<typeof useTheme>, focused: boolean) => {
  const defaultStyles = defaultStyle(theme, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? theme.BorderSuccess : 'transparent',
    backgroundColor: theme.BgAccentSoft,
  };
  return defaultStyles;
};

const disabledStyle = (
  theme: ReturnType<typeof useTheme>,
  focused: boolean,
) => {
  const defaultStyles = defaultStyle(theme, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? theme.BgTertiary : 'transparent',
    backgroundColor: theme.BgTertiary,
  };
  return defaultStyles;
};

const wrongStyle = (theme: ReturnType<typeof useTheme>, focused: boolean) => {
  const defaultStyles = defaultStyle(theme, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? theme.BorderError : 'transparent',
    backgroundColor: theme.BgError,
  };

  defaultStyles.subtitleText = {
    ...defaultStyles.subtitleText,
    color: theme.TextError,
  };
  return defaultStyles;
};

const stylesCreate = (
  theme: ReturnType<typeof useTheme>,
  type: ITypes,
  focused: boolean,
) => {
  switch (type) {
    case ITypes.valid:
      return validStyle(theme, focused);
    case ITypes.wrong:
      return wrongStyle(theme, focused);
    case ITypes.disabled:
      return disabledStyle(theme, focused);
    case ITypes.default:
    default:
      return defaultStyle(theme, focused);
  }
};
export default stylesCreate;
