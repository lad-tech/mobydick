import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-core';

const stylesCreate = (theme: IThemeContext) =>
  StyleSheet.create({
    containerStyle: {
      padding: theme.spaces.Space12,
    },
    typographyStyle: {
      flex: 1,
      paddingLeft: theme.spaces.Space12,
    },
    listStyle: {
      width: '90%',
    },
  });

export default stylesCreate;
