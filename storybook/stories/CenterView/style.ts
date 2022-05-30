import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

const styleCreate = (themeColors: ICurrentThemeColors) =>
  StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColors.BgPrimary,
    },
    themeSwitcher: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });

export default styleCreate;
