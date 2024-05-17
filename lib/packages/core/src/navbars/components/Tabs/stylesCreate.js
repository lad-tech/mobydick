"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    containerStyle: {
        maxWidth: '100%',
    },
    contentContainerStyle: {
        alignItems: 'center',
        paddingHorizontal: spaces.Space20,
        paddingVertical: spaces.Space8,
    },
    tab: {
        paddingHorizontal: spaces.Space12,
        paddingVertical: spaces.Space6,
        marginRight: spaces.Space8,
        borderRadius: spaces.Space8,
    },
}));
exports.default = stylesCreate;
