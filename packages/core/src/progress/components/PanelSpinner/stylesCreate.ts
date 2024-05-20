import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

const stylesCreate = createStyles(({spaces, colors}) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: spaces.Space20,
    backgroundColor: colors.BgPrimary,
    borderColor: colors.BorderSoft,
    borderWidth: px(0.5),
    borderRadius: px(200),
    shadowColor: colors.BgBlack,
    // ios
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: px(12),
    // android
    elevation: 10,
  },
  insideView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: spaces.Space48,
    aspectRatio: 1,
    borderRadius: spaces.Space24,
  },
}));
export default stylesCreate;
