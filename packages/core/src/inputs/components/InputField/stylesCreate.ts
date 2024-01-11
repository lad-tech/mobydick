import {StyleSheet} from 'react-native';

import {IInputsTypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';
import {IThemeContext, rem} from '../../../styles';

const defaultStyle = (
  theme: IThemeContext,
  focused: boolean,
  multiline: boolean,
) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      minWidth: rem(130),
    },
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      paddingRight: spaces.Space16,
      borderRadius: spaces.Space8,
      borderWidth: spaces.Space1,
      borderColor: focused ? colors.BorderNormal : 'transparent',
      marginVertical: spaces.Space8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: multiline ? undefined : 'center',
    },
    textInput: {
      flex: 1,
      paddingLeft: rem(18),
      textAlignVertical: multiline ? 'top' : undefined,
      padding: 0, // Android по дефолту ставит padding на input's
      paddingVertical: multiline ? spaces.Space12 : 0,
      borderRadius: spaces.Space8,
      // backgroundColor: 'red',
    },

    androidTextInput: {
      fontSize: spaces.Space16,
      color: colors.TextPrimary,
      padding: 0, // Android по дефолту ставит padding на input's
    },
  });
};

const stylesCreate = (
  theme: IThemeContext,
  type: IInputsTypes,
  focused: boolean,
  multiline: boolean,
) => {
  switch (type) {
    case IInputsTypes.valid:
      return validStyle(
        theme,
        defaultStyle(theme, focused, multiline),
        focused,
      );
    case IInputsTypes.wrong:
      return wrongStyle(
        theme,
        defaultStyle(theme, focused, multiline),
        focused,
      );
    case IInputsTypes.disabled:
      return disabledStyle(
        theme,
        defaultStyle(theme, focused, multiline),
        focused,
      );
    case IInputsTypes.default:
    default:
      return defaultStyle(theme, focused, multiline);
  }
};
export default stylesCreate;
