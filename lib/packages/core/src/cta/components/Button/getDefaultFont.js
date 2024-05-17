"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultFont = void 0;
const types_1 = require("./types");
const getDefaultFont = (size, type) => {
    let defaultButtonFont = 'SemiBold';
    switch (type) {
        case types_1.IButtonTypes.primary:
        case types_1.IButtonTypes.disabled:
        case types_1.IButtonTypes.destructive:
        case types_1.IButtonTypes.loading:
            defaultButtonFont += '-White';
            break;
        case types_1.IButtonTypes.secondary:
        case types_1.IButtonTypes.tertiary:
            defaultButtonFont += '-Accent';
    }
    switch (size) {
        case types_1.IButtonSize.small:
            defaultButtonFont += '-XS';
            break;
        case types_1.IButtonSize.large:
        case types_1.IButtonSize.fixed:
        default:
            defaultButtonFont += '-L';
            break;
    }
    return defaultButtonFont;
};
exports.getDefaultFont = getDefaultFont;
