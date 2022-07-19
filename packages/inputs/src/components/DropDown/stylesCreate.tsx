import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const defaultStyle = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    label: {
      color: colors.TextTertiary,
      fontSize: 14, // TODO: Брать из темы, когда они будут готовы,
      fontWeight: '500', // TODO: Брать из темы, когда они будут готовы,
      height: 15,
    },
    button: {
      backgroundColor: colors.BgSecondary,
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      borderWidth: 1,
      paddingHorizontal: 12,
      borderColor: colors.BorderNormal,
      marginTop: 8, // TODO: Брать из темы, когда они будут готовы
      width: 335,
      height: 48,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: colors.TextMuted,
    },
    textItem: {
      color: colors.TextSecondary,
    },
    flatList: {
      paddingVertical: 8,
      position: 'absolute',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.BorderSoft,
      backgroundColor: colors.BgPrimary,
      maxHeight: 38 * 6 + 16,
    },
    dropDownItem: {
      justifyContent: 'center',
      height: 38,
      width: 335,
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
