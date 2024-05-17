"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, selected, disabled) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: disabled ? 0.4 : 1,
    },
    circle: {
        width: (0, px_1.default)(22),
        aspectRatio: 1,
        borderRadius: (0, px_1.default)(11),
        backgroundColor: selected ? colors.ElementBase : 'transparent',
        borderColor: selected ? colors.ElementBase : colors.BorderNormal,
        borderWidth: spaces.Space2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: (0, px_1.default)(18),
        aspectRatio: 1,
        borderWidth: spaces.Space2,
        borderRadius: (0, px_1.default)(9),
        borderColor: colors.BgPrimary,
    },
}));
exports.default = stylesCreate;
