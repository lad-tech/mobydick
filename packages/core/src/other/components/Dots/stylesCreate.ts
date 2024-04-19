import rem from '../../../styles/utils/rem';
import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({spaces}, size: number = spaces.Space8) => ({
  dot: {
    width: size,
    height: size,
    marginHorizontal: rem(5),
    borderRadius: size / 2,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: rem(5),
  },
}));

export default stylesCreate;
