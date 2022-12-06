import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = ({colors, spaces}: IThemeContext, active?: boolean) => {
  return StyleSheet.create({
    dot: {
      width: spaces.Space8,
      height: spaces.Space8,
      marginHorizontal: 5,
      borderRadius: 100,
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
