import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;

  return StyleSheet.create({
    container: {
      padding: spaces.Space16,
      borderRadius: spaces.Space8,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      marginVertical: spaces.Space8,
      position: 'absolute',
    },
    arrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
    },
    title: {
      zIndex: 1,
      paddingBottom: spaces.Space8,
    },
    descriptionText: {
      zIndex: 1,
      paddingBottom: spaces.Space16,
    },
  });
};

export default stylesCreate;
