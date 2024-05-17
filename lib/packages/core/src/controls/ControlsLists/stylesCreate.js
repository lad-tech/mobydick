"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../styles");
const stylesCreate = (0, styles_1.createStyles)((_, horizontal) => ({
    list: {
        flexDirection: horizontal ? 'row' : 'column',
    },
}));
exports.default = stylesCreate;
