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
      paddingVertical: theme.spaces.Space6,
      paddingLeft: theme.spaces.Space12,
      paddingRight: theme.spaces.Space8,
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
      paddingHorizontal: theme.spaces.Space8,
    },
    cancelIcon: {
      backgroundColor: theme.colors.BgTertiary,
      borderRadius: theme.spaces.Space64,
      padding: theme.spaces.Space4,
    },
  });

export default stylesCreate;
