import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

export const disabledStyle = (
  theme: IThemeContext,
  defaultStyles: ReturnType<typeof StyleSheet.create>,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  if (inputContainer) {
    inputContainer.borderColor = active ? colors.BgTertiary : 'transparent';
    inputContainer.backgroundColor = colors.BgTertiary;
  }

  return defaultStyles;
};
