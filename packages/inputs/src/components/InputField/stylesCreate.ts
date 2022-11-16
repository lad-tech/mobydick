import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {IInputsTypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';

const defaultStyle = (theme: IThemeContext, focused: boolean) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      minWidth: rem(130),
    },
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      paddingLeft: rem(18),
      paddingRight: spaces.Space16,
      borderRadius: spaces.Space8,
      borderWidth: spaces.Space1,
      borderColor: focused ? colors.BorderNormal : 'transparent',
      marginVertical: spaces.Space8,
      height: rem(48),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 50,
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
      fontSize: spaces.Space16,
      color: colors.TextPrimary,
      lineHeight: spaces.Space20,
    },
  });
};

const stylesCreate = (
  theme: IThemeContext,
  type: IInputsTypes,
  focused: boolean,
) => {
  switch (type) {
    case IInputsTypes.valid:
      return validStyle(theme, defaultStyle(theme, focused), focused);
    case IInputsTypes.wrong:
      return wrongStyle(theme, defaultStyle(theme, focused), focused);
    case IInputsTypes.disabled:
      return disabledStyle(theme, defaultStyle(theme, focused), focused);
    case IInputsTypes.default:
    default:
      return defaultStyle(theme, focused);
  }
};
export default stylesCreate;
