import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles/src/styles/types';

const defaultStyle = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    indicatorView: {
      width: '90%',
      height: theme.spaces.Space20,
      borderRadius: theme.spaces.Space20,
      backgroundColor: theme.colors.BgSecondary,
    },
    indicator: {
      borderRadius: theme.spaces.Space20,
      backgroundColor: theme.colors.CtaBtnPrimary,
    },
  });

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};
export default stylesCreate;
