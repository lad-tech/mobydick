"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFont = void 0;
const useTheme_1 = __importDefault(require("../../styles/hooks/useTheme"));
const types_1 = require("../types");
const utils_1 = require("../utils");
const useFont = (font = 'Regular-Primary-S') => {
    const { colors, theme } = (0, useTheme_1.default)();
    const getWeight = (weight) => theme.fonts[weight];
    const [weight, color, size] = font.split('-');
    const { fontSize, lineHeight } = (0, utils_1.getSize)(size);
    const fontStyle = {
        color: colors[`${types_1.TEXT}${color}`],
        fontFamily: getWeight(weight),
        fontSize,
        lineHeight,
        minHeight: lineHeight,
    };
    return { fontStyle };
};
exports.useFont = useFont;
