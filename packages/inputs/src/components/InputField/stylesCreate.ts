import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ITypes} from './types';

const defaultStyle = (theme: IUseStylesTheme, focused: boolean) => {
  const {colors} = theme;
  return StyleSheet.create({
    label: {
      color: colors.TextTertiary,
      fontSize: 14, // TODO: Брать из темы, когда они будут готовы,
      fontWeight: '500', // TODO: Брать из темы, когда они будут готовы,
    },
    textInputContainer: {
      backgroundColor: colors.BgSecondary,
      padding: 8,
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      borderWidth: 1,
      borderColor: focused ? colors.BorderNormal : 'transparent',
      marginVertical: 8, // TODO: Брать из темы, когда они будут готовы
      minWidth: 120,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
      color: colors.TextPrimary,
    },
    subtitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subtitleText: {
      color: colors.TextMuted,
      fontSize: 12, // TODO: Брать из темы, когда они будут готовы
      fontWeight: '400',
    },
  });
};

const validStyle = (theme: IUseStylesTheme, focused: boolean) => {
  const defaultStyles = defaultStyle(theme, focused);
  const {colors} = theme;
  const {textInputContainer} = defaultStyles;

  textInputContainer.borderColor = focused
    ? colors.BorderSuccess
    : 'transparent';
  textInputContainer.backgroundColor = colors.BgAccentSoft;

  return defaultStyles;
};

const disabledStyle = (theme: IUseStylesTheme, focused: boolean) => {
  const defaultStyles = defaultStyle(theme, focused);
  const {colors} = theme;
  const {textInputContainer} = defaultStyles;

  textInputContainer.borderColor = focused ? colors.BgTertiary : 'transparent';
  textInputContainer.backgroundColor = colors.BgTertiary;

  return defaultStyles;
};

const wrongStyle = (theme: IUseStylesTheme, focused: boolean) => {
  const defaultStyles = defaultStyle(theme, focused);
  const {colors} = theme;
  const {textInputContainer} = defaultStyles;

  textInputContainer.borderColor = focused ? colors.BorderError : 'transparent';
  textInputContainer.backgroundColor = colors.BgError;
  defaultStyles.subtitleText.color = colors.TextError;

  return defaultStyles;
};

const stylesCreate = (
  theme: IUseStylesTheme,
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
