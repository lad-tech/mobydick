"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordY = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const CoordY = ({ font, coordinateValueYMaxLength, coords, index, colors, }) => {
    const coordinate = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const coordinate = coords.value.coordinateValuesY[index]?.coordinate ?? 0;
        return coordinate;
    });
    const value = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const value = coords.value.coordinateValuesY[index]?.value ?? '';
        return value;
    });
    const path = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const path = coords.value.coordinateValuesY[index]?.path ?? react_native_skia_1.Skia.Path.Make();
        return path;
    });
    const x = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { width } = font.measureText(value.value);
        const symbolSize = width / value.value.length;
        const r = -coordinateValueYMaxLength.value * symbolSize;
        if (r < 0) {
            return 0;
        }
        return r;
    });
    return (<react_native_skia_1.Group>
      <react_native_skia_1.Path path={path} style="stroke" strokeJoin="round" color={colors.BorderNormal}/>
      <react_native_skia_1.Text font={font} text={value} y={coordinate} x={x} color={colors.TextMuted}/>
    </react_native_skia_1.Group>);
};
exports.CoordY = CoordY;
