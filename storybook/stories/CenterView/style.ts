import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const styleCreate = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.BgPrimary,
    },
    themeSwitcher: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });

export default styleCreate;
