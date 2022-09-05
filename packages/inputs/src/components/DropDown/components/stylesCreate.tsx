import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    flatList: {
      backgroundColor: colors.BgSecondary,
      paddingVertical: spaces.Space8,
      position: 'absolute',
      borderRadius: spaces.Space12,
      borderWidth: 1,
      borderColor: colors.BorderSoft,
    },
    dropDownItem: {
      justifyContent: 'center',
      paddingHorizontal: spaces.Space12,
    },
  });
};

export default stylesCreate;
