"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const generateCoordinatesPath_1 = require("../utils/generateCoordinatesPath");
const getCoordinateValues_1 = require("../utils/getCoordinateValues");
const CoordY_1 = require("./CoordY");
const CoordX_1 = require("./CoordX");
const Coordinates = ({ font, colors, size, maxX, minX, maxY, minY, coordinatesLength, formatterX, formatterY, }) => {
    const coordinatesPath = (0, react_native_reanimated_1.useDerivedValue)(() => (0, generateCoordinatesPath_1.generateCoordinatesPath)({
        width: size.value.width,
        height: size.value.height,
    }));
    const coords = (0, react_native_reanimated_1.useDerivedValue)(() => (0, getCoordinateValues_1.getCoordinateValues)({
        font,
        maxX: maxX.value,
        minX: minX.value,
        maxY: maxY.value,
        minY: minY.value,
        height: size.value.height,
        width: size.value.width,
        coordinatesLength: coordinatesLength.value,
        formatterX,
        formatterY,
    }));
    const coordinateValueYMaxLength = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return ((formatterY?.(coords.value.coordinateValuesY[coords.value.coordinateValuesY.length - 1]?.value.length ?? 0) ?? coords.value.coordinateValuesY[0]?.value)?.length ?? 0);
    });
    if (!font)
        return null;
    return (<react_native_skia_1.Group>
      <react_native_skia_1.Path path={coordinatesPath} style="stroke" strokeJoin="round" strokeWidth={1} color={colors.BorderNormal}/>
      {coords.value.coordinateValuesY.map((_, index) => {
            return (<CoordY_1.CoordY key={index.toString()} font={font} coords={coords} colors={colors} index={index} coordinateValueYMaxLength={coordinateValueYMaxLength}/>);
        })}
      {coords.value.coordinateValuesX.map((_, index) => {
            return (<CoordX_1.CoordX key={index.toString()} font={font} coords={coords} colors={colors} index={index} size={size}/>);
        })}
    </react_native_skia_1.Group>);
};
exports.Coordinates = Coordinates;
exports.default = exports.Coordinates;
