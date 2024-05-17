"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ colors }) => ({
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: colors.BgOverlay,
        alignItems: 'center',
    },
}));
exports.default = stylesCreate;
