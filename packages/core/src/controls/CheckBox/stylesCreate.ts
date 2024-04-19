import rem from '../../styles/utils/rem';
import {createStyles} from '../../styles';

const stylesCreate = createStyles(
  (
    {spaces, colors},
    {disabled = false, selected = false, width = rem(20), height = rem(20)},
  ) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      opacity: disabled ? 0.4 : 1,
      maxWidth: '100%',
    },
    checkbox: {
      borderWidth: selected ? 0 : spaces.Space2,
      borderColor: colors.BorderNormal,
      width: width,
      height: height,
      borderRadius: spaces.Space4,
    },
  }),
);

export default stylesCreate;
