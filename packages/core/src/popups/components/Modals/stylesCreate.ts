import {Dimensions, StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles/theme/types';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = ({spaces}: IThemeContext) => {
  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'center',
    },
    container: {
      maxWidth: '80%',
    },
    contentCalendar: {
      width: WIDTH - spaces.Space8 * 2,
    },
  });
};

export default stylesCreate;
