import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles/src/styles/types';

const defaultStyle = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    indicator: {
      height: 20,
      borderRadius: 20,
      width: '100%',
      backgroundColor: theme.colors.CtaBtnPrimary,
    },
    indicatorView: {
      justifyContent: 'center',
      borderRadius: 20,
      width: 300,
      height: 20,
      overflow: 'hidden',
      backgroundColor: theme.colors.BgSecondary,
    },
  });

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};
export default stylesCreate;
