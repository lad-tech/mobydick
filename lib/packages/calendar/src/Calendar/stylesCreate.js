"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const { width: WIDTH } = react_native_1.Dimensions.get('window');
const stylesCreate = (0, mobydick_core_1.createStyles)(({ spaces }) => ({
    overlayStyle: {
        justifyContent: 'center',
    },
    contentCalendar: {
        width: WIDTH - spaces.Space8 * 2,
    },
    daysView: {
        width: WIDTH - spaces.Space8 * 2 - (0, mobydick_core_1.px)(16) * 2,
        height: (0, mobydick_core_1.px)(260),
    },
}));
exports.default = stylesCreate;
