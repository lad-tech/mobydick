import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles/src/styles/types';

const defaultStyle = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    container: {
      shadowColor: theme.colors.BgBlack,
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

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};
export default stylesCreate;
