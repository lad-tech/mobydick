import {StyleSheet} from 'react-native';
import {IUseStylesTheme, rem} from '@npm/mobydick-styles';

const stylesCreate = (
  theme: IUseStylesTheme,
  selected: boolean,
  disabled: boolean,
) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
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
      marginRight: spaces.Space12,
    },
    innerCircle: {
      width: rem(18),
      aspectRatio: 1,
      borderWidth: rem(2),
      borderRadius: 9,
      borderColor: colors.BgPrimary,
    },
  });
};

export default stylesCreate;
