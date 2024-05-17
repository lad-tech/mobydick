"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const types_1 = require("../types");
const Base_1 = require("../Base");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const TextInput_1 = __importDefault(require("../../../basic/components/TextInput/TextInput"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const useFont_1 = require("../../../typography/hooks/useFont");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const constants_1 = __importDefault(require("./constants"));
/**
 * Пример использования ref:
 * ```
 * const biba = () => {
 *   const ref = useRef<ITextInput>(null);
 *   const boba = () => {
 *     ref.current?.isFocused();
 *   };
 *   return (
 *     <InputField ref={ref} /> />
 *   );
 * };
 * ```
 */
const InputField = (0, react_1.forwardRef)((props, ref) => {
    const { style, title, subtitle, leftIcon, rightIcon, type = types_1.IInputsTypes.default, disabled = false, titleProps, subtitleIcon, subtitleProps, containerStyle, textInputContainerStyle, onFocus, onBlur, required, secureTextEntry, multiline = false, ...otherProps } = props;
    const [focused, setFocused] = (0, react_1.useState)(false);
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default, disabled ? types_1.IInputsTypes.disabled : type, focused, multiline);
    const { fontStyle } = (0, useFont_1.useFont)('Regular-Primary-M');
    const getStyle = (0, react_1.useMemo)(() => {
        if (react_native_1.Platform.OS === 'android') {
            return [styles.androidTextInput];
        }
        else {
            return fontStyle;
        }
    }, [fontStyle.color]);
    const onFocusInput = (0, react_1.useCallback)((event) => {
        setFocused(true);
        onFocus?.(event);
    }, [onFocus]);
    const onBlurInput = (0, react_1.useCallback)((event) => {
        setFocused(false);
        onBlur?.(event);
    }, [onBlur]);
    const getHeight = () => {
        return multiline ? { minHeight: (0, px_1.default)(80) } : { height: (0, px_1.default)(48) };
    };
    const getPadding = (0, react_1.useCallback)(() => {
        return rightIcon ? { paddingRight: (0, px_1.default)(16) } : null;
    }, [rightIcon]);
    return (<View_1.default style={[styles.container, containerStyle]}>
      {title && (<Base_1.InputTitle title={title} titleProps={titleProps} required={required}/>)}

      <View_1.default style={[
            styles.inputContainer,
            getHeight(),
            getPadding(),
            textInputContainerStyle,
        ]}>
        {leftIcon}
        <TextInput_1.default ref={ref} testID={constants_1.default.testID} style={[styles.textInput, getStyle, style]} placeholderTextColor={theme.colors.TextMuted} editable={!disabled} numberOfLines={1} onFocus={onFocusInput} onBlur={onBlurInput} selectionColor={theme.colors.IconBase} secureTextEntry={secureTextEntry} multiline={multiline} {...otherProps}/>
        {rightIcon}
      </View_1.default>
      {subtitle ? (<Base_1.InputSubtitle type={type} subtitle={subtitle} subtitleIcon={subtitleIcon} subtitleProps={subtitleProps}/>) : null}
    </View_1.default>);
});
exports.default = InputField;
