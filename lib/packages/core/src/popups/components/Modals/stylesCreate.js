"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles_1 = require("../../../styles");
const { width: WIDTH } = react_native_1.Dimensions.get('window');
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    overlayStyle: {
        justifyContent: 'center',
    },
    container: {
        maxWidth: '80%',
    },
    contentCalendar: {
        width: WIDTH - spaces.Space8 * 2,
    },
}));
exports.default = stylesCreate;
