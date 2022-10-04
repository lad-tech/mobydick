import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {spaces} = theme;

  return StyleSheet.create({
    containerStyle: {
      flex: 1,
      maxWidth: '100%',
    },
    contentContainerStyle: {
      alignItems: 'center',
      paddingHorizontal: spaces.Space20,
      paddingVertical: spaces.Space8,
    },
    tab: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spaces.Space12,
      paddingVertical: spaces.Space6,
      marginRight: spaces.Space8,
      borderRadius: spaces.Space8,
    },
  });
};

export default stylesCreate;
