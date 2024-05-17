"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: (0, px_1.default)(36),
        backgroundColor: colors.BgSecondary,
        borderRadius: spaces.Space8,
        paddingLeft: spaces.Space12,
        paddingRight: spaces.Space8,
    },
    textInput: {
        flex: 1,
        padding: 0, // Android по дефолту ставит padding на input's
        paddingHorizontal: spaces.Space8,
        fontSize: spaces.Space16,
        color: colors.TextPrimary,
    },
    cancelIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.BgTertiary,
        borderRadius: (0, px_1.default)(24),
        padding: spaces.Space4,
    },
}));
exports.default = stylesCreate;
