import {Dimensions, StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles/theme/types';
import rem from '../../../styles/spaces/rem';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;

  return StyleSheet.create({
    calendar: {
      marginTop: spaces.Space12,
      width: WIDTH - spaces.Space8 * 2 - rem(16) * 2,
    },
  });
};

export default stylesCreate;
