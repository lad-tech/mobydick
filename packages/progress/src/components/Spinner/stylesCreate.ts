import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

const defaultStyle = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    container: {
      shadowColor: theme.BgBlack,
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

const stylesCreate = (theme: ReturnType<typeof useTheme>) => {
  return defaultStyle(theme);
};
export default stylesCreate;
