import rem from '../../../styles/utils/rem';
import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({spaces, colors}) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: spaces.Space20,
    backgroundColor: colors.BgPrimary,
    borderColor: colors.BorderSoft,
    borderWidth: rem(0.5),
    borderRadius: rem(200),
    shadowColor: colors.BgBlack,
    // ios
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: rem(12),
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
