import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ITypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';

const defaultStyle = (theme: IThemeContext) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space8,
      paddingLeft: rem(18),
      paddingRight: theme.spaces.Space12,
      borderWidth: spaces.Space1,
      borderColor: colors.BorderNormal,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spaces.Space8,
    },
    placeholder: {
      flex: 1,
    },
    label: {
      paddingBottom: spaces.Space8,
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
      return validStyle(theme, defaultStyle(theme), isOpen);
    case ITypes.wrong:
      return wrongStyle(theme, defaultStyle(theme), isOpen);
    case ITypes.disabled:
      return disabledStyle(theme, defaultStyle(theme), isOpen);
    case ITypes.default:
    default:
      return defaultStyle(theme);
  }
};

export default stylesCreate;
