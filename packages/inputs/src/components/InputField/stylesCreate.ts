import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

import {ITypes} from './types';

const defaultStyle = (themeColors: ICurrentThemeColors, focused: boolean) =>
  StyleSheet.create({
    label: {
      color: themeColors.TextTertiary,
      fontSize: 14, // TODO: Брать из темы, когда они будут готовы,
      fontWeight: '500', // TODO: Брать из темы, когда они будут готовы,
    },
    textInputContainer: {
      backgroundColor: themeColors.BgSecondary,
      padding: 8,
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      borderWidth: 1,
      borderColor: focused ? themeColors.BorderNormal : 'transparent',
      marginVertical: 8, // TODO: Брать из темы, когда они будут готовы
      minWidth: 120,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
    },
    subtitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subtitleText: {
      color: themeColors.TextMuted,
      fontSize: 12, // TODO: Брать из темы, когда они будут готовы
      fontWeight: '400',
    },
  });

const validStyle = (themeColors: ICurrentThemeColors, focused: boolean) => {
  const defaultStyles = defaultStyle(themeColors, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? themeColors.BorderSuccess : 'transparent',
    backgroundColor: themeColors.BgAccentSoft,
  };
  return defaultStyles;
};

const disabledStyle = (themeColors: ICurrentThemeColors, focused: boolean) => {
  const defaultStyles = defaultStyle(themeColors, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? themeColors.BgTertiary : 'transparent',
    backgroundColor: themeColors.BgTertiary,
  };
  return defaultStyles;
};

const wrongStyle = (themeColors: ICurrentThemeColors, focused: boolean) => {
  const defaultStyles = defaultStyle(themeColors, focused);

  defaultStyles.textInputContainer = {
    ...defaultStyles.textInputContainer,
    borderColor: focused ? themeColors.BorderError : 'transparent',
    backgroundColor: themeColors.BgError,
  };

  defaultStyles.subtitleText = {
    ...defaultStyles.subtitleText,
    color: themeColors.TextError,
  };
  return defaultStyles;
};

const stylesCreate = (
  themeColors: ICurrentThemeColors,
  type: ITypes,
  focused: boolean,
) => {
  switch (type) {
    case ITypes.valid:
      return validStyle(themeColors, focused);
    case ITypes.wrong:
      return wrongStyle(themeColors, focused);
    case ITypes.disabled:
      return disabledStyle(themeColors, focused);
    case ITypes.default:
    default:
      return defaultStyle(themeColors, focused);
  }
};
export default stylesCreate;
