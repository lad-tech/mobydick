"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLinePath = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const constants_1 = require("./constants");
const generateLinePath = ({ height, width, coordinates, maxY, maxX, minY, minX, }) => {
    'worklet';
    const path = react_native_skia_1.Skia.Path.Make();
    coordinates.forEach(({ x, y }, index) => {
        const xCoordinate = (0, react_native_reanimated_1.interpolate)(x, [minX, maxX], [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            width - constants_1.chartPaddingHorizontal / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP);
        const yCoordinate = (0, react_native_reanimated_1.interpolate)(y, [minY, maxY], [height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], react_native_reanimated_1.Extrapolation.CLAMP);
        if (index === 0) {
            path.moveTo(xCoordinate, yCoordinate);
        }
        path.lineTo(xCoordinate, yCoordinate);
    });
    return {
        path,
    };
};
exports.generateLinePath = generateLinePath;
