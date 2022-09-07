import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IThemeContext) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    flatList: {
      backgroundColor: colors.BgSecondary,
      position: 'absolute',
      borderRadius: spaces.Space12,
      borderWidth: 1,
      borderColor: colors.BorderSoft,
    },
    contentContainer: {
      paddingVertical: spaces.Space8,
    },
    dropDownItem: {
      justifyContent: 'center',
      paddingHorizontal: spaces.Space12,
      paddingVertical: spaces.Space8,
    },
  });
};

export default stylesCreate;
