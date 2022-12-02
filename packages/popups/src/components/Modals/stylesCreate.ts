import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (_theme: IThemeContext) => {
  return StyleSheet.create({
    overlayStyle: {
      justifyContent: 'center',
    },
    container: {
      maxWidth: rem(300),
    },
  });
};

export default stylesCreate;
