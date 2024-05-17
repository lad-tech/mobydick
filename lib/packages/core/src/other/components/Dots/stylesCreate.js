"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces }, size = spaces.Space8) => ({
    dot: {
        width: size,
        height: size,
        marginHorizontal: (0, px_1.default)(5),
        borderRadius: size / 2,
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: (0, px_1.default)(5),
    },
}));
exports.default = stylesCreate;
