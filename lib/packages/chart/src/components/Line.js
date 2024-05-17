"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const Line = ({ chartPath, ...rest }) => {
    return (<react_native_skia_1.Path path={chartPath} style="stroke" strokeJoin="round" strokeWidth={2} {...rest}/>);
};
exports.Line = Line;
exports.default = exports.Line;
