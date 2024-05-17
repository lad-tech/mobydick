"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const style_1 = require("../../style");
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const defaultStyle = (0, styles_1.createStyles)(({ spaces, colors }, focused, multiline) => ({
    container: {
        minWidth: (0, px_1.default)(130),
    },
    inputContainer: {
        backgroundColor: colors.BgSecondary,
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
        paddingRight: spaces.Space16,
        paddingLeft: (0, px_1.default)(18),
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
}));
const stylesCreate = (theme, type, focused, multiline) => {
    switch (type) {
        case types_1.IInputsTypes.valid:
            return (0, style_1.validStyle)(theme, defaultStyle(theme, focused, multiline), focused);
        case types_1.IInputsTypes.wrong:
            return (0, style_1.wrongStyle)(theme, defaultStyle(theme, focused, multiline), focused);
        case types_1.IInputsTypes.disabled:
            return (0, style_1.disabledStyle)(theme, defaultStyle(theme, focused, multiline), focused);
        case types_1.IInputsTypes.default:
        default:
            return defaultStyle(theme, focused, multiline);
    }
};
exports.default = stylesCreate;
