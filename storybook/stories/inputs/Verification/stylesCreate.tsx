import {StyleSheet} from 'react-native';
import {IThemeContext, rem} from '@npm/mobydick-styles';

const stylesCreate = (theme: IThemeContext) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInputContainerStyle: {
      marginRight: spaces.Space12,
    },
    borderStyle: {
      width: rem(15),
      height: spaces.Space2,
      backgroundColor: colors.BorderNormal,
      marginHorizontal: spaces.Space6,
    },
    stringView: {
      flexDirection: 'row',
      paddingVertical: spaces.Space16,
      justifyContent: 'space-between',
    },
  });
};

export default stylesCreate;
