import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles/theme/types';

const defaultStyle = (theme: IThemeContext) =>
  StyleSheet.create({
    indicatorView: {
      width: '90%',
      height: theme.spaces.Space2,
      borderRadius: theme.spaces.Space20,
      backgroundColor: theme.colors.BgSecondary,
    },
    indicator: {
      borderRadius: theme.spaces.Space20,
      backgroundColor: theme.colors.CtaBtnPrimary,
    },
  });

const stylesCreate = (theme: IThemeContext) => {
  return defaultStyle(theme);
};
export default stylesCreate;
