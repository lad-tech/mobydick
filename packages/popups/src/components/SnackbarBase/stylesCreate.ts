import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.BgPrimary,
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: theme.spaces.Space20,
      marginVertical: theme.spaces.Space20,
    },
    title: {
      paddingRight: theme.spaces.Space20,
      paddingVertical: theme.spaces.Space16,
    },
  });
};

export default stylesCreate;
