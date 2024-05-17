"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: spaces.Space20,
        backgroundColor: colors.BgPrimary,
        borderColor: colors.BorderSoft,
        borderWidth: (0, px_1.default)(0.5),
        borderRadius: (0, px_1.default)(200),
        shadowColor: colors.BgBlack,
        // ios
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: (0, px_1.default)(12),
        // android
        elevation: 10,
    },
    insideView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: spaces.Space48,
        aspectRatio: 1,
        borderRadius: spaces.Space24,
    },
}));
exports.default = stylesCreate;
