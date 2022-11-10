import {IThemeContext} from '@npm/mobydick-styles';
import {Dimensions, StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces, colors} = theme;
  const {width} = Dimensions.get('window');
  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'flex-end',
    },
    container: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      width: width - spaces.Space6 * 2,
      padding: spaces.Space20,
      marginVertical: spaces.Space20,
    },
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
