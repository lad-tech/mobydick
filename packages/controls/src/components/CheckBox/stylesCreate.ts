import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (
  themeColors: IThemeContext,
  disabled?: boolean,
  selected?: boolean,
) => {
  const {colors, spaces} = themeColors;

  return StyleSheet.create({
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
      width: spaces.Space20,
      height: spaces.Space20,
      borderRadius: spaces.Space4,
    },
  });
};

export default stylesCreate;
