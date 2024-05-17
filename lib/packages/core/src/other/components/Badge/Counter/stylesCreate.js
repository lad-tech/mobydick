"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../../styles");
const px_1 = __importDefault(require("../../../../styles/utils/px"));
const types_1 = require("./types");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, size, type) => {
    const isMedium = size === types_1.ICounterSize.medium;
    const defaultSize = isMedium ? spaces.Space24 : (0, px_1.default)(18);
    const getBackgroundColor = () => {
        switch (type) {
            case types_1.ICounterTypes.attention:
                return { backgroundColor: colors.ElementAttention };
            case types_1.ICounterTypes.accent:
                return { backgroundColor: colors.ElementBase };
            case types_1.ICounterTypes.muted:
                return { backgroundColor: colors.ElementMuted };
            default:
                return { backgroundColor: colors.ElementWhite };
        }
    };
    const getColorText = () => {
        switch (type) {
            case types_1.ICounterTypes.accentLight:
                return { color: colors.TextAccent };
            case types_1.ICounterTypes.attentionLight:
                return { color: colors.TextError };
            case types_1.ICounterTypes.mutedLight:
                return { color: colors.TextMuted };
            default:
                return { color: colors.TextWhite };
        }
    };
    return {
        counter: {
            zIndex: 1,
            alignSelf: 'center',
            minWidth: defaultSize,
            height: defaultSize,
            borderRadius: defaultSize / 2,
            alignItems: 'center',
            justifyContent: 'center',
            ...getBackgroundColor(),
        },
        text: {
            textAlign: 'center',
            paddingHorizontal: isMedium ? spaces.Space6 : spaces.Space4,
            ...getColorText(),
        },
    };
});
exports.default = stylesCreate;
