import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: colors.BgPrimary,
      marginHorizontal: 10,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    exitView: {
      alignSelf: 'flex-end',
    },
    exitSvg: {
      padding: 12,
      borderRadius: 100,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 26,
      color: colors.TextPrimary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      textAlign: 'center',
    },
  });
};

export default stylesCreate;
