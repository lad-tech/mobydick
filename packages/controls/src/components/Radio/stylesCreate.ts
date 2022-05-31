import {ICurrentThemeColors} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (
  themeColors: ICurrentThemeColors,
  selected: boolean,
  disabled: boolean,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: themeColors.BgPrimary,
      opacity: disabled ? 0.4 : 1,
    },
    circle: {
      width: 22,
      aspectRatio: 1,
      borderRadius: 11,
      backgroundColor: selected ? themeColors.ElementBase : 'transparent',
      borderColor: selected
        ? themeColors.ElementBase
        : themeColors.BorderNormal,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 11,
    },
    innerCircle: {
      width: 18,
      aspectRatio: 1,
      borderWidth: 2,
      borderRadius: 9,
      borderColor: themeColors.BgPrimary,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: -0.25,
      color: themeColors.TextPrimary,
    },
  });

export default stylesCreate;
