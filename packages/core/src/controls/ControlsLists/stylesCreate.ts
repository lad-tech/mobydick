import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../styles/theme/types';

const stylesCreate = (_theme: IThemeContext, horizontal: boolean) =>
  StyleSheet.create({
    list: {
      flexDirection: horizontal ? 'row' : 'column',
    },
  });

export default stylesCreate;
