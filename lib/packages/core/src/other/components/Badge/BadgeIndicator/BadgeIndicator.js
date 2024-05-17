"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const styles_1 = require("../../../../styles");
const px_1 = __importDefault(require("../../../../styles/utils/px"));
const types_1 = require("./types");
const BadgeIndicator = ({ type, style }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const { colors } = (0, useTheme_1.default)();
    const getBackgroundColor = (0, react_1.useCallback)(() => {
        switch (type) {
            case types_1.IIndicatorTypes.secondary:
                return colors.ElementAdditional;
            case types_1.IIndicatorTypes.primary:
            default:
                return colors.ElementAttention;
        }
    }, [type]);
    return (<View_1.default style={[styles.indicator, { backgroundColor: getBackgroundColor() }, style]}/>);
};
exports.default = BadgeIndicator;
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    indicator: {
        position: 'absolute',
        zIndex: 1,
        width: (0, px_1.default)(9),
        height: (0, px_1.default)(9),
        borderRadius: (0, px_1.default)(9) / 2,
        borderColor: colors.BgPrimary,
        borderWidth: spaces.Space1,
    },
}));
