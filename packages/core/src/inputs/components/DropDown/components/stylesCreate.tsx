import {createStyles} from '../../../../styles';

const stylesCreate = createStyles(({spaces, colors}) => ({
  flatList: {
    position: 'absolute',
    backgroundColor: colors.BgSecondary,
    borderRadius: spaces.Space12,
    borderWidth: spaces.Space1,
    borderColor: colors.BorderSoft,
    paddingVertical: spaces.Space8,
  },

  dropDownItem: {
    justifyContent: 'center',
    paddingHorizontal: spaces.Space12,
    paddingVertical: spaces.Space8,
  },
}));

export default stylesCreate;
