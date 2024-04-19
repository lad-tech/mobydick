import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({spaces, colors}) => ({
  indicatorView: {
    width: '90%',
    height: spaces.Space2,
    borderRadius: spaces.Space20,
    backgroundColor: colors.BgSecondary,
  },
  indicator: {
    borderRadius: spaces.Space20,
    backgroundColor: colors.CtaBtnPrimary,
  },
}));

export default stylesCreate;
