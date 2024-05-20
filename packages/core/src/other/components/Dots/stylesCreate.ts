import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

const stylesCreate = createStyles(({spaces}, size: number = spaces.Space8) => ({
  dot: {
    width: size,
    height: size,
    marginHorizontal: px(5),
    borderRadius: size / 2,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: px(5),
  },
}));

export default stylesCreate;
