import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces, colors} = theme;
  return StyleSheet.create({
    closeButton: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    alertView: {
      borderRadius: 100,
      padding: spaces.Space12,
      marginTop: spaces.Space24,
      backgroundColor: colors.BgAccentSoft,
    },
    text: {
      marginTop: spaces.Space24,
      textAlign: 'center',
    },
    verticalButtonsView: {
      marginTop: spaces.Space24,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    horizontalButtonsView: {
      flexDirection: 'row',
      paddingTop: spaces.Space24,
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
      marginTop: spaces.Space24,
    },
  });
};

export default stylesCreate;
