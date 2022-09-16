import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = (theme: IThemeContext) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spaces.Space20,
      backgroundColor: theme.colors.BgPrimary,
      borderColor: theme.colors.BorderSoft,
      borderWidth: rem(0.5),
      borderRadius: rem(200),
      shadowColor: theme.colors.BgBlack,
      // ios
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: rem(12),
      // android
      elevation: 10,
    },
    insideView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spaces.Space48,
      aspectRatio: 1,
      borderRadius: theme.spaces.Space24,
    },
  });

const stylesCreate = (theme: IThemeContext) => {
  return defaultStyle(theme);
};
export default stylesCreate;
