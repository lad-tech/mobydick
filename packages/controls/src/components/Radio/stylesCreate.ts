import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

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
      backgroundColor: colors.BgPrimary,
      opacity: disabled ? 0.4 : 1,
    },
    circle: {
      width: 22,
      aspectRatio: 1,
      borderRadius: 11,
      backgroundColor: selected ? colors.ElementBase : 'transparent',
      borderColor: selected ? colors.ElementBase : colors.BorderNormal,
      borderWidth: spaces.Space2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: spaces.Space12,
    },
    innerCircle: {
      width: 18,
      aspectRatio: 1,
      borderWidth: 2,
      borderRadius: 9,
      borderColor: colors.BgPrimary,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: -0.25,
      color: colors.TextPrimary,
    },
  });
};

export default stylesCreate;
