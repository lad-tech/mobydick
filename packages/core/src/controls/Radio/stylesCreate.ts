import {createStyles} from '../../styles';
import px from '../../styles/utils/px';

const stylesCreate = createStyles(
  ({spaces, colors}, selected: boolean, disabled: boolean) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      opacity: disabled ? 0.4 : 1,
    },
    circle: {
      width: px(22),
      aspectRatio: 1,
      borderRadius: px(11),
      backgroundColor: selected ? colors.ElementBase : 'transparent',
      borderColor: selected ? colors.ElementBase : colors.BorderNormal,
      borderWidth: spaces.Space2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: px(18),
      aspectRatio: 1,
      borderWidth: spaces.Space2,
      borderRadius: px(9),
      borderColor: colors.BgPrimary,
    },
  }),
);

export default stylesCreate;
