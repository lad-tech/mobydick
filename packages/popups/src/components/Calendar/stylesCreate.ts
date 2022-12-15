import {Dimensions, StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;

  return StyleSheet.create({
    calendar: {
      borderRadius: spaces.Space4,
      marginTop: spaces.Space32,
      paddingVertical: spaces.Space8,
      marginBottom: spaces.Space16,
      width: WIDTH - spaces.Space8 * 2 - spaces.Space20 * 2,
    },
  });
};

export default stylesCreate;
