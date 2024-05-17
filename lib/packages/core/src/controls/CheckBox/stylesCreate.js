"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, { disabled = false, selected = false, width = (0, px_1.default)(20), height = (0, px_1.default)(20) }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: disabled ? 0.4 : 1,
        maxWidth: '100%',
    },
    checkbox: {
        borderWidth: selected ? 0 : spaces.Space2,
        borderColor: colors.BorderNormal,
        width: width,
        height: height,
        borderRadius: spaces.Space4,
    },
}));
exports.default = stylesCreate;
