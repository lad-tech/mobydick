"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoordinateValues = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_skia_1 = require("@shopify/react-native-skia");
const constants_1 = require("./constants");
const getCoordinateValues = ({ font, maxY, minY, maxX, minX, height, width, coordinatesLength, formatterX, formatterY, }) => {
    'worklet';
    const netCount = coordinatesLength - 1;
    const stepY = (maxY - minY) / netCount;
    const stepX = (maxX - minX) / netCount;
    const coordinateValuesY = [];
    const coordinateValuesX = [];
    let lastXEndOfText = 0;
    let lastYEndOfText = height;
    for (let i = 0; i < coordinatesLength; i++) {
        // For Y coordinate
        const valueY = minY + stepY * i;
        const coordinateY = (0, react_native_reanimated_1.interpolate)(valueY, [minY, maxY], [height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], react_native_reanimated_1.Extrapolation.CLAMP);
        const valueYFormatted = formatterY?.(valueY) ?? valueY.toFixed(2);
        const { height: textYHeight } = font.measureText(valueYFormatted);
        const textYCoord = coordinateY + textYHeight / 2;
        const textYTop = textYCoord - textYHeight;
        const pathY = react_native_skia_1.Skia.Path.Make()
            .moveTo(constants_1.chartPaddingHorizontal, coordinateY)
            .lineTo(width, coordinateY);
        pathY.dash(2, 2, 2);
        if (textYCoord < lastYEndOfText) {
            coordinateValuesY.push({
                value: valueYFormatted,
                coordinate: textYCoord,
                path: pathY,
            });
            lastYEndOfText = textYTop;
        }
        // For X coordinate
        const valueX = minX + stepX * i;
        const coordinateX = (0, react_native_reanimated_1.interpolate)(valueX, [minX, maxX], [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            width - constants_1.chartPaddingHorizontal / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP);
        const valueXFormatted = formatterX?.(valueX) ?? valueX.toFixed(2);
        const { width: textXWidth } = font.measureText(valueXFormatted);
        const textXCoord = coordinateX - textXWidth / 2;
        const textXEnd = coordinateX + textXWidth;
        const pathX = react_native_skia_1.Skia.Path.Make()
            .moveTo(coordinateX, height - constants_1.chartPaddingVertical / 2)
            .lineTo(coordinateX, 0);
        pathX.dash(2, 2, 2);
        if (textXCoord > lastXEndOfText) {
            coordinateValuesX.push({
                value: valueXFormatted,
                coordinate: textXCoord,
                path: pathX,
            });
            lastXEndOfText = textXEnd;
        }
    }
    return {
        coordinateValuesY,
        coordinateValuesX,
    };
};
exports.getCoordinateValues = getCoordinateValues;
