import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

const defaultStyle = (themeColors: ICurrentThemeColors) =>
  StyleSheet.create({
    container: {
      shadowColor: themeColors.BgBlack,
      // ios
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,

      // android
      elevation: 10,
      borderRadius: 20,
    },
  });

const stylesCreate = (theme: ICurrentThemeColors) => {
  return defaultStyle(theme);
};
export default stylesCreate;
