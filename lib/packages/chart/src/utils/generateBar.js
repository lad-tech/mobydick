"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBarsPath = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const constants_1 = require("./constants");
const generateBarsPath = ({ height, width, coordinates, }) => {
    'worklet';
    const path = react_native_skia_1.Skia.Path.Make();
    const minY = 0;
    let { maxX, maxY, minX } = {
        maxX: 0,
        maxY: 0,
        minX: Infinity,
    };
    coordinates.forEach(({ x, y }) => {
        if (maxX < x) {
            maxX = x;
        }
        if (x < minX) {
            minX = x;
        }
        if (maxY < y) {
            maxY = y;
        }
    });
    coordinates.forEach(({ x, y }) => {
        const xCoordinate = (0, react_native_reanimated_1.interpolate)(x, [minX, maxX], [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            width - constants_1.chartPaddingHorizontal / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP);
        path.moveTo(xCoordinate, (0, react_native_reanimated_1.interpolate)(0, [minY, maxY], [
            height - constants_1.chartPaddingVertical / 2,
            constants_1.chartPaddingVertical + constants_1.chartPaddingVertical / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP));
        path.lineTo(xCoordinate, (0, react_native_reanimated_1.interpolate)(y, [minY, maxY], [height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], react_native_reanimated_1.Extrapolation.CLAMP));
    });
    return {
        path,
        maxX,
        maxY,
        minX,
        minY,
    };
};
exports.generateBarsPath = generateBarsPath;
