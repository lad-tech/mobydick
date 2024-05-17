"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, disabled) => ({
    container: {
        width: (0, px_1.default)(50),
        height: (0, px_1.default)(30),
        borderRadius: spaces.Space20,
        padding: spaces.Space2,
        opacity: disabled ? 0.4 : 1,
    },
    switcher: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: colors.ElementWhite,
        borderRadius: (0, px_1.default)(25),
    },
}));
exports.default = stylesCreate;
