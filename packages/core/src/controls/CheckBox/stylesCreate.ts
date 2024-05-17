import {createStyles} from '../../styles';
import px from '../../styles/utils/px';

const stylesCreate = createStyles(
  (
    {spaces, colors},
    {disabled = false, selected = false, width = px(20), height = px(20)},
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
