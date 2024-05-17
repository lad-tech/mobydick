"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, focused) => ({
    inputContainer: {
        backgroundColor: focused ? colors.BgAccentSoft : colors.BgSecondary,
        borderRadius: spaces.Space8,
        minWidth: (0, px_1.default)(68),
        minHeight: (0, px_1.default)(48),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        padding: 0, // Android по дефолту ставит padding на input's
        textAlign: 'center',
    },
}));
exports.default = stylesCreate;
