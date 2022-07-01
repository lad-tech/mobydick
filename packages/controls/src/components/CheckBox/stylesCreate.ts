import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (
  themeColors: IUseStylesTheme,
  disabled?: boolean,
  selected?: boolean,
) => {
  const {colors, spaces} = themeColors;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.BgPrimary,
      opacity: disabled ? 0.4 : 1,
    },
    checkbox: {
      borderWidth: selected ? 0 : 2,
      borderColor: colors.BorderNormal,
      width: 20,
      height: 20,
      borderRadius: 4,
      marginRight: spaces.Space12,
    },
  });
};

export default stylesCreate;
