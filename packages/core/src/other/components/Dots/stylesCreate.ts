import {StyleSheet} from 'react-native';

import rem from '../../../styles/utils/rem';
import {IThemeContext} from '../../../styles';

const stylesCreate = ({spaces}: IThemeContext, size = spaces.Space8) => {
  return StyleSheet.create({
    dot: {
      width: size,
      height: size,
      marginHorizontal: rem(5),
      borderRadius: size / 2,
    },
    dots: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: rem(5),
    },
  });
};

export default stylesCreate;
