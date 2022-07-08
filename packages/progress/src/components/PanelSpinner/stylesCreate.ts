import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.colors.BgPrimary,
      borderColor: theme.colors.BorderSoft,
      borderWidth: 0.5,
      borderRadius: 200,
      shadowColor: theme.colors.BgBlack,
      // ios
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      // android
      elevation: 10,
    },
    insideView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spaces.Space48,
      aspectRatio: 1,
      borderRadius: 24,
    },
  });

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};
export default stylesCreate;
