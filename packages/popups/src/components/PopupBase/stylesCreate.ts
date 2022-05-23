import {StyleSheet} from 'react-native';
import {ICurrentThemeColors} from '@npm/mobydick-styles';

const stylesCreate = (themeColors: ICurrentThemeColors) =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: themeColors.BgOverlay,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: themeColors.BgPrimary,
      padding: 12,
    },
  });

export default stylesCreate;
