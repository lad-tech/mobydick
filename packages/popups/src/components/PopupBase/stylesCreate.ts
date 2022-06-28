import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.BgOverlay,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 30,
    },
    container: {
      backgroundColor: colors.BgPrimary,
      marginHorizontal: 10,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,
      paddingTop: 16,
    },
    title: {
      fontSize: 24,
      lineHeight: 26,
      fontWeight: '600',
      color: colors.TextPrimary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      textAlign: 'center',
    },
    descriptionText: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '400',
      color: colors.TextSecondary,
      paddingHorizontal: 20,
      paddingBottom: 20,
      textAlign: 'center',
    },
    exitView: {
      alignSelf: 'flex-end',
      paddingHorizontal: 16,
    },
    exitSvg: {
      padding: 12,
      borderRadius: 100,
    },
  });
};

export default stylesCreate;
