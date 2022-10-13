import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.BgOverlay,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    container: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space12,
      justifyContent: 'center',
      // alignItems: 'center',
      padding: spaces.Space20,
      marginVertical: spaces.Space20,
      marginHorizontal: spaces.Space6,
    },
  });
};

export default stylesCreate;
