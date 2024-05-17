"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrongStyle = void 0;
const wrongStyle = (theme, defaultStyles, active) => {
    const { colors } = theme;
    const { inputContainer } = defaultStyles;
    inputContainer.borderColor = active ? colors.BorderError : 'transparent';
    inputContainer.backgroundColor = colors.BgError;
    return defaultStyles;
};
exports.wrongStyle = wrongStyle;
