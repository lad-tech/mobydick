import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '95%',
      backgroundColor: theme.colors.BgSecondary,
      borderRadius: theme.spaces.Space8,
      padding: theme.spaces.Space6,
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
    },
    cancelIcon: {
      backgroundColor: theme.colors.BgTertiary,
      borderRadius: theme.spaces.Space64,
      padding: theme.spaces.Space4,
    },
  });

export default stylesCreate;
