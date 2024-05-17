"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const px_1 = __importDefault(require("../../../../styles/utils/px"));
const getSizeIcon = (size) => {
    switch (size) {
        case types_1.IAvatarSize.S:
            return (0, px_1.default)(12);
        case types_1.IAvatarSize.L:
            return (0, px_1.default)(30);
        case types_1.IAvatarSize.XL:
            return (0, px_1.default)(40);
        case types_1.IAvatarSize.M:
        default:
            return (0, px_1.default)(20);
    }
};
const IconAvatar = ({ size }) => {
    const { colors } = (0, useTheme_1.default)();
    return (<SimpleIcon_1.default name={'icon-account'} size={getSizeIcon(size)} color={colors.IconWhite}/>);
};
exports.default = IconAvatar;
