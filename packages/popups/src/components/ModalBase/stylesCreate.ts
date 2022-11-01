import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces, colors} = theme;
  return StyleSheet.create({
    closeButton: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginBottom: spaces.Space24,
    },
    alertView: {
      borderRadius: 100,
      padding: spaces.Space12,
      marginBottom: spaces.Space24,
      backgroundColor: colors.BgAccentSoft,
    },
    text: {
      marginBottom: spaces.Space24,
      textAlign: 'center',
    },
    horizontalButtonsView: {
      flexDirection: 'row',
      marginBottom: spaces.Space24,
    },
    horizontalLeftButton: {
      flex: 1,
      marginRight: spaces.Space6,
    },
    horizontalRightButton: {
      flex: 1,
      marginLeft: spaces.Space6,
    },
    imageView: {
      marginBottom: spaces.Space24,
    },
  });
};

export default stylesCreate;
