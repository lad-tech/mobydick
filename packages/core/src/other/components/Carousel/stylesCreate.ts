import {Dimensions, StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles';

const {width} = Dimensions.get('window');

const stylesCreate = (_theme: IThemeContext, sideMargin: number) => {
  return StyleSheet.create({
    item: {
      marginHorizontal: sideMargin,
      width: width - sideMargin * 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default stylesCreate;
