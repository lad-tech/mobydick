import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {colors, spaces} = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tab: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spaces.Space12,
      paddingVertical: spaces.Space6,
      backgroundColor: colors.BgTertiary,
      marginRight: spaces.Space8,
      borderRadius: spaces.Space8,
    },
  });
};

export default stylesCreate;
