import {IUseStylesTheme} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlayStyle: {
      backgroundColor: 'transparent',
    },
    container: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,

      backgroundColor: colors.IconFavorite,
    },
    arrow: {
      position: 'absolute',
      borderRadius: 4,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      //позиция стрелочки меняется в зависимости этих стилей
      right: 10,
      bottom: -7,
      borderTopWidth: 8,
      borderRightWidth: 10,
      borderBottomWidth: 0,
      borderLeftWidth: 10,
      borderTopColor: colors.IconFavorite,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    text: {
      fontSize: 14,
      zIndex: 1,
      color: colors.TextPrimary,
    },
  });
};

export default stylesCreate;
