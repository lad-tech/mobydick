import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

export const validStyle = (
  theme: IThemeContext,
  defaultStyles: ReturnType<typeof StyleSheet.create>,
  active: boolean,
) => {
  const {colors} = theme;
  const {inputContainer} = defaultStyles;

  if (inputContainer) {
    inputContainer.borderColor = active ? colors.BorderSuccess : 'transparent';
    inputContainer.backgroundColor = colors.BgAccentSoft;
  }

  return defaultStyles;
};
