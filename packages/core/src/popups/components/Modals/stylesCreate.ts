import {Dimensions} from 'react-native';

import {createStyles} from '../../../styles';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = createStyles(({spaces}) => ({
  overlayStyle: {
    justifyContent: 'center',
  },
  container: {
    maxWidth: '80%',
  },
  contentCalendar: {
    width: WIDTH - spaces.Space8 * 2,
  },
}));

export default stylesCreate;
