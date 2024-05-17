import {createStyles} from '../../styles';
import px from '../../styles/utils/px';

const stylesCreate = createStyles(({spaces, colors}, disabled: boolean) => ({
  container: {
    width: px(50),
    height: px(30),
    borderRadius: spaces.Space20,
    padding: spaces.Space2,
    opacity: disabled ? 0.4 : 1,
  },
  switcher: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.ElementWhite,
    borderRadius: px(25),
  },
}));

export default stylesCreate;
