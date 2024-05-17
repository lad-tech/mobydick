"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const types_1 = require("../types");
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const styles_1 = require("../../../../styles");
const StatusDot = ({ state, style }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const { colors } = (0, useTheme_1.default)();
    const getBackgroundColor = (0, react_1.useCallback)(() => {
        switch (state) {
            case types_1.IStatusState.blue:
                return colors.ElementBase;
            case types_1.IStatusState.red:
                return colors.ElementAttention;
            case types_1.IStatusState.green:
                return colors.ElementSuccess;
            case types_1.IStatusState.orange:
                return colors.ElementAdditional;
            case types_1.IStatusState.gray:
            default:
                return colors.ElementMuted;
        }
    }, [
        state,
        colors.ElementAdditional,
        colors.ElementBase,
        colors.ElementAttention,
        colors.ElementSuccess,
        colors.ElementMuted,
    ]);
    return (<View_1.default style={[styles.dot, { backgroundColor: getBackgroundColor() }, style]}/>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    dot: {
        width: spaces.Space8,
        height: spaces.Space8,
        borderRadius: spaces.Space8 / 2,
    },
}));
exports.default = StatusDot;
