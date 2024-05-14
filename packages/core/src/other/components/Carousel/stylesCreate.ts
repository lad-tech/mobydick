import {createStyles} from '../../../styles';

const stylesCreate = createStyles((_, sideMargin: number) => ({
  item: {
    marginHorizontal: Math.floor(sideMargin),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default stylesCreate;
