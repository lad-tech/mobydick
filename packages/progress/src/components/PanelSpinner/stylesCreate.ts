import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spaces.Space64,
      aspectRatio: 1,
      backgroundColor: theme.colors.BgPrimary,
      borderRadius: 44,
      shadowColor: theme.colors.BgBlack,
      // ios
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 16,
      // android
      elevation: 16,
    },
    errorView: {
      backgroundColor: theme.colors.IconMuted,
      width: 32,
      height: 32,
      borderRadius: 16,
    },
  });

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};
export default stylesCreate;
