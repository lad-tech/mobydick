import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (_theme: IUseStylesTheme, horizontal: boolean) =>
  StyleSheet.create({
    list: {
      flexDirection: horizontal ? 'row' : 'column',
    },
  });

export default stylesCreate;
