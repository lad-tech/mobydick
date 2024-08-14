import {IInputsTypes} from '../types';
import {disabledStyle, validStyle, wrongStyle} from '../../style';
import {createStyles, IThemeContext} from '../../../styles';
import px from '../../../styles/utils/px';

const defaultStyle = createStyles(
  ({spaces, colors}, focused: boolean, multiline: boolean) => ({
    container: {
      minWidth: px(130),
    },
    inputContainer: {
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space8,
      borderWidth: spaces.Space1,
      borderColor: focused ? colors.BorderHard : 'transparent',
      marginVertical: spaces.Space8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: multiline ? undefined : 'center',
    },
    textInput: {
      flex: 1,
      paddingRight: spaces.Space16,
      paddingLeft: px(18),
      textAlignVertical: multiline ? 'top' : undefined,
      padding: 0, // Android по дефолту ставит padding на input's
      paddingVertical: spaces.Space12,
      borderRadius: spaces.Space8,
    },

    androidTextInput: {
      fontSize: spaces.Space16,
      color: colors.TextPrimary,
      padding: 0, // Android по дефолту ставит padding на input's
    },
  }),
);

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
      return disabledStyle(theme, defaultStyle(theme, focused, multiline));
    case IInputsTypes.default:
    default:
      return defaultStyle(theme, focused, multiline);
  }
};
export default stylesCreate;
