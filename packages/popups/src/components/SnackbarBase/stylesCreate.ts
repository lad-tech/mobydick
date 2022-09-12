import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.BgPrimary,
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: theme.spaces.Space20,
      margin: theme.spaces.Space20,
    },
    title: {
      flex: 1,
      paddingRight: theme.spaces.Space20,
      paddingVertical: theme.spaces.Space16,
    },
  });
};

export default stylesCreate;
