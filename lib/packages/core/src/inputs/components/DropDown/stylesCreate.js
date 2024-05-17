"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const style_1 = require("../../style");
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const defaultStyle = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    container: {
        justifyContent: 'center',
    },
    inputContainer: {
        backgroundColor: colors.BgSecondary,
        borderRadius: spaces.Space8,
        paddingLeft: (0, px_1.default)(18),
        paddingRight: spaces.Space12,
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
}));
const stylesCreate = (theme, type, isOpen) => {
    switch (type) {
        case types_1.IInputsTypes.valid:
            return (0, style_1.validStyle)(theme, defaultStyle(theme), isOpen);
        case types_1.IInputsTypes.wrong:
            return (0, style_1.wrongStyle)(theme, defaultStyle(theme), isOpen);
        case types_1.IInputsTypes.disabled:
            return (0, style_1.disabledStyle)(theme, defaultStyle(theme), isOpen);
        case types_1.IInputsTypes.default:
        default:
            return defaultStyle(theme);
    }
};
exports.default = stylesCreate;
