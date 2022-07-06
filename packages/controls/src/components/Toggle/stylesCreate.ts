import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IUseStylesTheme, disabled: boolean) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      width: 50,
      height: 30,
      borderRadius: spaces.Space20,
      padding: spaces.Space2,
      opacity: disabled ? 0.4 : 1,
    },
    switcher: {
      flex: 1,
      aspectRatio: 1,
      backgroundColor: colors.ElementWhite,
      borderRadius: 25,
    },
  });
};

export default stylesCreate;
