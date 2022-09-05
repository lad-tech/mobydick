import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

export const wrongStyle = <
  T extends StyleSheet.NamedStyles<{inputContainer: ViewStyle}>,
>(
  theme: IThemeContext,
  defaultStyles: T,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  inputContainer.borderColor = active ? colors.BorderError : 'transparent';
  inputContainer.backgroundColor = colors.BgError;

  return defaultStyles;
};
