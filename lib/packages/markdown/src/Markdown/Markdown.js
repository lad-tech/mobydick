"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_markdown_display_1 = __importDefault(require("react-native-markdown-display"));
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const Markdown = ({ children, style }) => {
    const { colors } = (0, mobydick_core_1.useTheme)();
    const { fontStyle: bodyFontStyle } = (0, mobydick_core_1.useFont)('Regular-Primary-XXS');
    const { fontStyle: strongFontStyle } = (0, mobydick_core_1.useFont)('SemiBold-Primary-XXS');
    const innersStyle = {
        body: {
            fontFamily: bodyFontStyle.fontFamily,
            fontSize: bodyFontStyle.fontSize,
            color: bodyFontStyle.color,
        },
        heading1: {
            fontSize: px(24),
        },
        heading2: {
            fontSize: px(20),
        },
        heading3: {
            fontSize: px(18),
        },
        strong: {
            fontFamily: strongFontStyle.fontFamily,
        },
        code_inline: {
            backgroundColor: colors.BgSecondary,
        },
        code_block: {
            backgroundColor: colors.BgSecondary,
        },
        fence: {
            backgroundColor: colors.BgSecondary,
        },
    };
    return (<react_native_markdown_display_1.default style={style ?? innersStyle}>{children}</react_native_markdown_display_1.default>);
};
exports.default = Markdown;
