"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validStyle = void 0;
const validStyle = (theme, defaultStyles, active) => {
    const { colors } = theme;
    const { inputContainer } = defaultStyles;
    inputContainer.borderColor = active ? colors.BorderSuccess : 'transparent';
    inputContainer.backgroundColor = colors.BgAccentSoft;
    return defaultStyles;
};
exports.validStyle = validStyle;
