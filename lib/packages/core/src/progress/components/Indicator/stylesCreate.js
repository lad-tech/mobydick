"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    indicatorView: {
        width: '90%',
        height: spaces.Space2,
        borderRadius: spaces.Space20,
        backgroundColor: colors.BgSecondary,
    },
    indicator: {
        borderRadius: spaces.Space20,
        backgroundColor: colors.CtaBtnPrimary,
    },
}));
exports.default = stylesCreate;
