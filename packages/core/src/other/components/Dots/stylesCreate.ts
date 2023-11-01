import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles';
import rem from '../../../styles/spaces/rem';

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
