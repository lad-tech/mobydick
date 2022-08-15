import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';
import rem from '@npm/mobydick-styles/src/spaces/rem';

import {ITypes} from './types';

const defaultStyle = (theme: IUseStylesTheme, focused: boolean) => {
  const {colors} = theme;
  return StyleSheet.create({
    textInputContainer: {
      backgroundColor: colors.BgSecondary,
      padding: theme.spaces.Space8,
      borderRadius: theme.spaces.Space8,
      borderWidth: theme.spaces.Space2,
      borderColor: focused ? colors.BorderNormal : 'transparent',
      marginVertical: theme.spaces.Space8,
      minWidth: rem(120),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
      color: colors.TextPrimary,
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
