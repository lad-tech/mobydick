import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ITypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';

const defaultStyle = (theme: IThemeContext, focused: boolean) => {
  const {colors} = theme;
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      padding: theme.spaces.Space8,
      borderRadius: theme.spaces.Space8,
      borderWidth: theme.spaces.Space1,
      borderColor: focused ? colors.BorderNormal : 'transparent',
      marginVertical: theme.spaces.Space8,
      minWidth: rem(130),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 0, // Android по дефолту ставит padding на input's
    },
  });
};

const stylesCreate = (theme: IThemeContext, type: ITypes, focused: boolean) => {
  switch (type) {
    case ITypes.valid:
      return validStyle(theme, defaultStyle(theme, focused), focused);
    case ITypes.wrong:
      return wrongStyle(theme, defaultStyle(theme, focused), focused);
    case ITypes.disabled:
      return disabledStyle(theme, defaultStyle(theme, focused), focused);
    case ITypes.default:
    default:
      return defaultStyle(theme, focused);
  }
};
export default stylesCreate;
