"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles = (0, ui_1.createStyles)(({ colors, spaces }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.BgPrimary,
        padding: spaces.Space8,
        gap: spaces.Space16,
    },
}));
exports.default = getScreenStyles;
