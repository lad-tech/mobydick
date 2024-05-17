"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const Point = ({ coords, r }) => {
    return <react_native_skia_1.Circle c={coords} r={r}/>;
};
exports.Point = Point;
