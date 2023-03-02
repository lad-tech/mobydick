import {Dimensions, StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles';

const {width} = Dimensions.get('window');

const stylesCreate = ({colors}: IThemeContext, sideMargin: number) => {
  return StyleSheet.create({
    item: {
      marginHorizontal: sideMargin,
      width: width - sideMargin * 2,
      backgroundColor: colors.BgAccent,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default stylesCreate;
