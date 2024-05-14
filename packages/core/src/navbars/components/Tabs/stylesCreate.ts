import {createStyles} from '../../../styles';

const stylesCreate = createStyles(({spaces}) => ({
  containerStyle: {
    maxWidth: '100%',
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: spaces.Space20,
    paddingVertical: spaces.Space8,
  },
  tab: {
    paddingHorizontal: spaces.Space12,
    paddingVertical: spaces.Space6,
    marginRight: spaces.Space8,
    borderRadius: spaces.Space8,
  },
}));

export default stylesCreate;
