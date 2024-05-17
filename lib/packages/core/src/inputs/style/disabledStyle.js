"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disabledStyle = void 0;
const disabledStyle = (theme, defaultStyles, active) => {
    const { colors } = theme;
    const { inputContainer } = defaultStyles;
    inputContainer.borderColor = active ? colors.BgTertiary : 'transparent';
    inputContainer.backgroundColor = colors.BgTertiary;
    return defaultStyles;
};
exports.disabledStyle = disabledStyle;
