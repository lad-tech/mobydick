"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    flatList: {
        position: 'absolute',
        backgroundColor: colors.BgSecondary,
        borderRadius: spaces.Space12,
        borderWidth: spaces.Space1,
        borderColor: colors.BorderSoft,
        paddingVertical: spaces.Space8,
    },
    dropDownItem: {
        justifyContent: 'center',
        paddingHorizontal: spaces.Space12,
        paddingVertical: spaces.Space8,
    },
}));
exports.default = stylesCreate;
