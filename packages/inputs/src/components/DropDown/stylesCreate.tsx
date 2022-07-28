import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    button: {
      backgroundColor: colors.BgSecondary,
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      paddingHorizontal: 12,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    flatList: {
      paddingVertical: 8,
      position: 'absolute',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.BorderSoft,
      backgroundColor: colors.BgPrimary,
    },
    dropDownItem: {
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: colors.TextSecondary,
    },
  });
};

const stylesCreate = (theme: IUseStylesTheme) => {
  return defaultStyle(theme);
};

export default stylesCreate;
