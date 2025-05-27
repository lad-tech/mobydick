import {StyleSheet, ViewStyle} from 'react-native';

import {IThemeContext} from '../../styles/types';

export const wrongStyle = <
  T extends StyleSheet.NamedStyles<{inputContainer: ViewStyle}>,
>(
  theme: IThemeContext,
  defaultStyles: T,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  inputContainer.borderColor = colors.BorderError;

  return defaultStyles;
};
