"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const px = (size) => {
    return react_native_1.PixelRatio.roundToNearestPixel(size);
};
exports.default = px;
