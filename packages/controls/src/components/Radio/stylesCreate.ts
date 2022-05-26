import {useTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (
  theme: ReturnType<typeof useTheme>,
  selected: boolean,
  disabled?: boolean,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.BgPrimary,
      opacity: disabled ? 0.4 : 1,
    },
    circle: {
      width: 22,
      aspectRatio: 1,
      borderRadius: 11,
      backgroundColor: selected ? theme.ElementBase : 'transparent',
      borderColor: selected ? theme.ElementBase : theme.BorderNormal,
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
      borderColor: theme.BgPrimary,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: -0.25,
    },
  });

export default stylesCreate;
