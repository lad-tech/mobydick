import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({colors}) => ({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.BgOverlay,
    alignItems: 'center',
  },
}));

export default stylesCreate;
