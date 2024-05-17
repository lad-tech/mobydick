"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)((_, sideMargin) => ({
    item: {
        marginHorizontal: Math.floor(sideMargin),
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
exports.default = stylesCreate;
