import {IThemeContext} from '@npm/mobydick-styles';
import {Dimensions, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'center',
    },
    container: {
      maxWidth: '80%',
    },
    contentCalendar: {
      width: WIDTH - spaces.Space8 * 2,
      paddingHorizontal: 14,
      backgroundColor: colors.BgSecondary,
    },
  });
};

export default stylesCreate;
