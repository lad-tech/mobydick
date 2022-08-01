import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;

  return StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      marginVertical: 8,
    },
    arrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
    },
    title: {
      fontSize: 14,
      zIndex: 1,
      color: colors.TextPrimary,
      paddingBottom: 8,
    },
    descriptionText: {
      fontSize: 14,
      zIndex: 1,
      color: colors.TextTertiary,
      paddingBottom: 16,
    },
  });
};

export default stylesCreate;
