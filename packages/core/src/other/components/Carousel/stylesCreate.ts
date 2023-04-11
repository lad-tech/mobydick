import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles';

const stylesCreate = (_theme: IThemeContext, sideMargin: number) => {
  return StyleSheet.create({
    item: {
      marginHorizontal: Math.floor(sideMargin),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default stylesCreate;
