import {StyleSheet} from 'react-native';
import {IThemeContext, rem} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext, focused?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    inputContainer: {
      backgroundColor: focused
        ? theme.colors.BgAccentSoft
        : theme.colors.BgSecondary,
      // paddingLeft: rem(18),
      // paddingRight: theme.spaces.Space16,
      borderRadius: theme.spaces.Space8,
      marginHorizontal: theme.spaces.Space6,
      minWidth: rem(68),
      minHeight: rem(48),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's

      textAlign: 'center',
    },
  });

export default stylesCreate;
