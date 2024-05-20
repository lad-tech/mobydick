import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

const stylesCreate = createStyles(({spaces, colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: px(36),
    backgroundColor: colors.BgSecondary,
    borderRadius: spaces.Space8,
    paddingLeft: spaces.Space12,
    paddingRight: spaces.Space8,
  },
  textInput: {
    flex: 1,
    padding: 0, // Android по дефолту ставит padding на input's
    paddingHorizontal: spaces.Space8,
    fontSize: spaces.Space16,
    color: colors.TextPrimary,
  },
  cancelIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BgTertiary,
    borderRadius: px(24),
    padding: spaces.Space4,
  },
}));

export default stylesCreate;
