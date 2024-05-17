"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const typography_1 = require("../../../typography");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const TextInput_1 = __importDefault(require("../../../basic/components/TextInput/TextInput"));
const other_1 = require("../../../other");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const CodeField = (0, react_1.forwardRef)((props, ref) => {
    const { maxLength, textInputContainerStyle, style, onChangeText, editable, onBackKeyPress, secureTextEntry, fontStyleCodeField, ...otherProps } = props;
    const [focused, setFocused] = (0, react_1.useState)(false);
    const { fontStyle } = (0, typography_1.useFont)(fontStyleCodeField ? fontStyleCodeField : 'Regular-Primary-XL');
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default, focused);
    const onFocus = (0, react_1.useCallback)(() => setFocused(true), []);
    const onBlur = (0, react_1.useCallback)(() => setFocused(false), []);
    const onKeyPress = (0, react_1.useCallback)((e) => {
        if (onBackKeyPress && e.nativeEvent.key === 'Backspace') {
            onBackKeyPress();
        }
    }, [onBackKeyPress]);
    return (<View_1.default style={[styles.inputContainer, textInputContainerStyle]}>
      <TextInput_1.default ref={ref} accessibilityLabel={other_1.LABELS.codeField} importantForAutofill={'no'} onChangeText={onChangeText} style={[styles.textInput, fontStyle, style]} placeholderTextColor={theme.colors.TextMuted} maxLength={maxLength || 1} keyboardType={'numeric'} editable={editable} secureTextEntry={secureTextEntry} allowFontScaling={false} onFocus={onFocus} onBlur={onBlur} onKeyPress={onKeyPress} selectionColor={theme.colors.IconBase} {...otherProps}/>
    </View_1.default>);
});
exports.default = CodeField;
