"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const types_1 = require("../types");
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const typography_1 = require("../../../../typography");
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const styles_1 = require("../../../../styles");
const StatusTag = ({ state, text, style }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const { colors } = (0, useTheme_1.default)();
    const getFont = (0, react_1.useCallback)(() => {
        switch (state) {
            case types_1.IStatusState.blue:
                return 'Regular-Accent-XXS';
            case types_1.IStatusState.red:
                return 'Regular-Error-XXS';
            case types_1.IStatusState.green:
                return 'Regular-Success-XXS';
            case types_1.IStatusState.orange:
                return 'Regular-Warning-XXS';
            case types_1.IStatusState.gray:
            default:
                return 'Regular-Tertiary-XXS';
        }
    }, [state]);
    const getBackgroundColorText = (0, react_1.useCallback)(() => {
        switch (state) {
            case types_1.IStatusState.blue:
                return colors.BgAccentSoft;
            case types_1.IStatusState.red:
                return colors.BgError;
            case types_1.IStatusState.green:
                return colors.BgSuccess;
            case types_1.IStatusState.orange:
                return colors.BgWarning;
            case types_1.IStatusState.gray:
            default:
                return colors.BgSecondary;
        }
    }, [
        state,
        colors.BgAccentSoft,
        colors.BgError,
        colors.BgSuccess,
        colors.BgWarning,
        colors.BgSecondary,
    ]);
    return (<View_1.default style={[
            styles.tag,
            {
                backgroundColor: getBackgroundColorText(),
            },
            style,
        ]}>
      <typography_1.Typography font={getFont()}>{text}</typography_1.Typography>
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    tag: {
        paddingVertical: spaces.Space2,
        paddingHorizontal: spaces.Space6,
        borderRadius: spaces.Space4,
    },
}));
exports.default = StatusTag;
