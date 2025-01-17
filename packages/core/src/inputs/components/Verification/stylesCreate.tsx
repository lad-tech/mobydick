import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

const stylesCreate = createStyles(({spaces, colors}, focused: boolean) => ({
  inputContainer: {
    backgroundColor: colors.BgSecondary,
    borderRadius: spaces.Space8,
    borderColor: focused ? colors.BorderHard : 'transparent',
    minWidth: px(68),
    minHeight: px(48),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 0, // Android по дефолту ставит padding на input's

    textAlign: 'center',
  },
}));

export default stylesCreate;
