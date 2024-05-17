"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigationTheme = void 0;
const ui_1 = require("@shared/ui");
const useNavigationTheme = () => {
    const { currentTheme, colors } = (0, ui_1.useTheme)();
    const theme = {
        dark: currentTheme === ui_1.CurrentTheme.dark,
        colors: {
            primary: colors.BgContrast,
            border: colors.BorderNormal,
            text: colors.TextPrimary,
            card: colors.BgPrimary,
            background: colors.BgPrimary,
            notification: colors.IconNeutral,
        },
    };
    return theme;
};
exports.useNavigationTheme = useNavigationTheme;
