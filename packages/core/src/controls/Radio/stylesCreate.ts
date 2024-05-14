import rem from '../../styles/utils/rem';
import {createStyles} from '../../styles';

const stylesCreate = createStyles(
  ({spaces, colors}, selected: boolean, disabled: boolean) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      opacity: disabled ? 0.4 : 1,
    },
    circle: {
      width: rem(22),
      aspectRatio: 1,
      borderRadius: rem(11),
      backgroundColor: selected ? colors.ElementBase : 'transparent',
      borderColor: selected ? colors.ElementBase : colors.BorderNormal,
      borderWidth: spaces.Space2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: rem(18),
      aspectRatio: 1,
      borderWidth: spaces.Space2,
      borderRadius: rem(9),
      borderColor: colors.BgPrimary,
    },
  }),
);

export default stylesCreate;
