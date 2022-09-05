import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ITypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';

const defaultStyle = (theme: IThemeContext, isOpen: boolean) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space8,
      paddingHorizontal: spaces.Space12,
      borderWidth: 1,
      borderColor: isOpen ? colors.BorderNormal : 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: spaces.Space8,
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: colors.TextSecondary,
    },
  });
};

const stylesCreate = (theme: IThemeContext, type: ITypes, isOpen: boolean) => {
  switch (type) {
    case ITypes.valid:
      return validStyle(theme, defaultStyle(theme, isOpen), isOpen);
    case ITypes.wrong:
      return wrongStyle(theme, defaultStyle(theme, isOpen), isOpen);
    case ITypes.disabled:
      return disabledStyle(theme, defaultStyle(theme, isOpen), isOpen);
    case ITypes.default:
    default:
      return defaultStyle(theme, isOpen);
  }
};

export default stylesCreate;
