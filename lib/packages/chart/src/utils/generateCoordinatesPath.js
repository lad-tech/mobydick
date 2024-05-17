"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCoordinatesPath = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const constants_1 = require("./constants");
const generateCoordinatesPath = ({ height, width, }) => {
    'worklet';
    return react_native_skia_1.Skia.Path.Make()
        .moveTo(constants_1.chartPaddingHorizontal, 0)
        .lineTo(constants_1.chartPaddingHorizontal, height - constants_1.chartPaddingVertical / 2)
        .lineTo(width, height - constants_1.chartPaddingVertical / 2);
};
exports.generateCoordinatesPath = generateCoordinatesPath;
