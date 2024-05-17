import {Dimensions} from 'react-native';
import {createStyles, px} from '@lad-tech/mobydick-core';

const {width: WIDTH} = Dimensions.get('window');

const stylesCreate = createStyles(({spaces}) => ({
  overlayStyle: {
    justifyContent: 'center',
  },
  contentCalendar: {
    width: WIDTH - spaces.Space8 * 2,
  },
  daysView: {
    width: WIDTH - spaces.Space8 * 2 - px(16) * 2,
    height: px(260),
  },
}));

export default stylesCreate;
