import {StyleSheet} from 'react-native';
import {IThemeContext, rem} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext, focused: boolean) =>
  StyleSheet.create({
    inputContainer: {
      backgroundColor: focused
        ? theme.colors.BgAccentSoft
        : theme.colors.BgSecondary,
      borderRadius: theme.spaces.Space8,
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
