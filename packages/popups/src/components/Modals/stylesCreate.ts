import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (_theme: IThemeContext) => {
  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'center',
    },
    container: {
      maxWidth: '80%',
    },
  });
};

export default stylesCreate;
