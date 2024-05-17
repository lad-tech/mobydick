"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordX = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_skia_1 = require("@shopify/react-native-skia");
const textPadding = 4;
const CoordX = ({ font, size, coords, index, colors }) => {
    const path = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const path = coords.value.coordinateValuesX[index]?.path ?? react_native_skia_1.Skia.Path.Make();
        return path;
    });
    const value = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const value = coords.value.coordinateValuesX[index]?.value ?? '';
        return value;
    });
    const coordinate = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const coordinate = coords.value.coordinateValuesX[index]?.coordinate ?? 0;
        return coordinate;
    });
    const y = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return size.value.height - textPadding; //Прижимаю текст слегка наверх, чтобы не обрезался
    });
    return (<react_native_skia_1.Group>
      <react_native_skia_1.Path path={path} style="stroke" strokeJoin="round" color={colors.BorderNormal}/>
      <react_native_skia_1.Text font={font} text={value} y={y} x={coordinate} color={colors.TextMuted}/>
    </react_native_skia_1.Group>);
};
exports.CoordX = CoordX;
