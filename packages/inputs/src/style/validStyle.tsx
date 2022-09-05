import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

export const validStyle = <
  T extends StyleSheet.NamedStyles<{inputContainer: ViewStyle}>,
>(
  theme: IThemeContext,
  defaultStyles: T,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  inputContainer.borderColor = active ? colors.BorderSuccess : 'transparent';
  inputContainer.backgroundColor = colors.BgAccentSoft;

  return defaultStyles;
};
