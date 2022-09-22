import {StyleSheet} from 'react-native';
import {IThemeContext} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext) => {
  const {colors} = theme;
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
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',

      paddingBottom: theme.spaces.Space40,
      paddingTop: theme.spaces.Space16,
      paddingHorizontal: theme.spaces.Space20,
      marginVertical: theme.spaces.Space20,
      marginHorizontal: theme.spaces.Space6,
    },
    title: {
      paddingHorizontal: theme.spaces.Space20,
      paddingVertical: theme.spaces.Space10,
      textAlign: 'center',
    },
    descriptionText: {
      paddingHorizontal: theme.spaces.Space20,
      paddingBottom: theme.spaces.Space20,
      textAlign: 'center',
    },
    closeButton: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default stylesCreate;
