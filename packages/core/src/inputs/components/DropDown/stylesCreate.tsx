import {StyleSheet} from 'react-native';

import {IInputsTypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';
import rem from '../../../styles/utils/rem';
import {IThemeContext} from '../../../styles/types';

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
    pv8: {
      paddingVertical: spaces.Space8,
    },
    placeholder: {
      flex: 1,
    },
    title: {
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

const stylesCreate = (
  theme: IThemeContext,
  type: IInputsTypes,
  isOpen: boolean,
) => {
  switch (type) {
    case IInputsTypes.valid:
      return validStyle(theme, defaultStyle(theme), isOpen);
    case IInputsTypes.wrong:
      return wrongStyle(theme, defaultStyle(theme), isOpen);
    case IInputsTypes.disabled:
      return disabledStyle(theme, defaultStyle(theme), isOpen);
    case IInputsTypes.default:
    default:
      return defaultStyle(theme);
  }
};

export default stylesCreate;
