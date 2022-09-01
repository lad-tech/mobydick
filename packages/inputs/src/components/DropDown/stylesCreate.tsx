import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = ({spaces, colors}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    button: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space8,
      paddingHorizontal: spaces.Space12,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: spaces.Space8,
    },
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
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: colors.TextSecondary,
    },
  });
};

const stylesCreate = (theme: IThemeContext) => {
  return defaultStyle(theme);
};

export default stylesCreate;
