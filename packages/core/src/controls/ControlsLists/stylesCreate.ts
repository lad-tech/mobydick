import {createStyles} from '../../styles';

const stylesCreate = createStyles((_, horizontal: boolean) => ({
  list: {
    flexDirection: horizontal ? 'row' : 'column',
  },
}));

export default stylesCreate;
