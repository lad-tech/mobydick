import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles';

const stylesCreate = (
  {colors, spaces}: IThemeContext,
  size = spaces.Space8,
  active?: boolean,
) => {
  return StyleSheet.create({
    dot: {
      width: size,
      height: size,
      marginHorizontal: 5,
      borderRadius: size / 2,
      backgroundColor: active ? colors.ElementNeutral : colors.ElementMuted,
    },
    dots: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 5,
    },
  });
};

export default stylesCreate;
