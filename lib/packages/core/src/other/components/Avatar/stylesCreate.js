"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const types_1 = require("./types");
const getSizeStyles = (sizeAvatar) => {
    switch (sizeAvatar) {
        case types_1.IAvatarSize.S:
            return {
                width: (0, px_1.default)(24),
                height: (0, px_1.default)(24),
                borderRadius: (0, px_1.default)(12),
            };
        case types_1.IAvatarSize.M:
            return {
                width: (0, px_1.default)(40),
                height: (0, px_1.default)(40),
                borderRadius: (0, px_1.default)(20),
            };
        case types_1.IAvatarSize.L:
            return {
                width: (0, px_1.default)(60),
                height: (0, px_1.default)(60),
                borderRadius: (0, px_1.default)(30),
            };
        case types_1.IAvatarSize.XL:
            return {
                width: (0, px_1.default)(80),
                height: (0, px_1.default)(80),
                borderRadius: (0, px_1.default)(40),
            };
    }
};
const getBorderStyles = (color, border) => {
    return (border && {
        borderWidth: (0, px_1.default)(2),
        borderColor: color,
    });
};
const stylesCreate = (0, styles_1.createStyles)(({ colors }, size, border) => ({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        ...getSizeStyles(size),
        ...getBorderStyles(colors.BgPrimary, border),
    },
    image: {
        ...getSizeStyles(size),
        ...getBorderStyles(colors.BgPrimary, border),
    },
}));
exports.default = stylesCreate;
