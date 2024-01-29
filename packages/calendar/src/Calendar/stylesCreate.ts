import {Dimensions, StyleSheet} from 'react-native';
import {IThemeContext, rem} from '@lad-tech/mobydick-core';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;

  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'center',
    },
    contentCalendar: {
      width: WIDTH - spaces.Space8 * 2,
    },
    daysView: {
      width: WIDTH - spaces.Space8 * 2 - rem(16) * 2,
      height: rem(260),
    },
  });
};

export default stylesCreate;
