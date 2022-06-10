import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.BgOverlay,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: colors.BgPrimary,
      padding: 12,
    },
  });
};

export default stylesCreate;
