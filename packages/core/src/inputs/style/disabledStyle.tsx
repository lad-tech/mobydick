import {StyleSheet, ViewStyle} from 'react-native';

import {IThemeContext} from '../../styles/types';

export const disabledStyle = <
  T extends StyleSheet.NamedStyles<{inputContainer: ViewStyle}>,
>(
  theme: IThemeContext,
  defaultStyles: T,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  inputContainer.borderColor = active ? colors.BgTertiary : 'transparent';
  inputContainer.backgroundColor = colors.BgTertiary;

  return defaultStyles;
};
