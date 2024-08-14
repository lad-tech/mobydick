import {StyleSheet, ViewStyle} from 'react-native';

import {IThemeContext} from '../../styles/types';

export const disabledStyle = <
  T extends StyleSheet.NamedStyles<{inputContainer: ViewStyle}>,
>(
  theme: IThemeContext,
  defaultStyles: T,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  inputContainer.borderColor = colors.BorderSoft;
  inputContainer.backgroundColor = 'transparent';

  return defaultStyles;
};
