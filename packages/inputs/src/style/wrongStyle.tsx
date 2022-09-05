import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

export const wrongStyle = (
  theme: IThemeContext,
  defaultStyles: ReturnType<typeof StyleSheet.create>,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  if (inputContainer) {
    inputContainer.borderColor = active ? colors.BorderError : 'transparent';
    inputContainer.backgroundColor = colors.BgError;
  }
  return defaultStyles;
};
