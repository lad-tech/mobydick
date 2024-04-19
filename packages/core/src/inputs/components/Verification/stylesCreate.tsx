import {createStyles, rem} from '../../../styles';

const stylesCreate = createStyles(({spaces, colors}, focused: boolean) => ({
  inputContainer: {
    backgroundColor: focused ? colors.BgAccentSoft : colors.BgSecondary,
    borderRadius: spaces.Space8,
    minWidth: rem(68),
    minHeight: rem(48),
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
