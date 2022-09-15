import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const stylesCreate = (_theme: IThemeContext) =>
  StyleSheet.create({
    containerStyle: {
      padding: 12,
    },
    typographyStyle: {
      flex: 1,
    },
    listStyle: {
      width: '90%',
    },
  });

export default stylesCreate;
