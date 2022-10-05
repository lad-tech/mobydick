import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlayStyle: {
      backgroundColor: 'transparent',
    },
    container: {
      backgroundColor: colors.BgContrast,
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: theme.spaces.Space20,
      margin: theme.spaces.Space20,
    },
    title: {
      flex: 1,
      paddingRight: theme.spaces.Space8,
      paddingVertical: theme.spaces.Space16,
    },
  });
};

export default stylesCreate;
