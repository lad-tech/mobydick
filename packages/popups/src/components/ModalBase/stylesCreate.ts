import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;
  return StyleSheet.create({
    closeButton: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertView: {
      borderRadius: 100,
      padding: spaces.Space12,
      marginTop: spaces.Space24,
    },
    text: {
      marginTop: spaces.Space24,
      textAlign: 'center',
    },
    verticalButton: {
      marginTop: spaces.Space24,
    },
    horizontalButtonsView: {
      flexDirection: 'row',
      paddingTop: spaces.Space24,
    },
    horizontalLeftButton: {
      marginRight: spaces.Space6,
    },
    horizontalRightButton: {
      marginLeft: spaces.Space6,
    },
  });
};

export default stylesCreate;
