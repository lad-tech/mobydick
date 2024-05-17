"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointOfLine = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const Point_1 = require("./Point");
const PointOfLine = ({ pointIndex, chartPath }) => {
    const coords = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const [, x, y] = chartPath.value.toCmds()[pointIndex] ?? [];
        return {
            x: x || 0,
            y: y || 0,
        };
    });
    return <Point_1.Point r={4} coords={coords}/>;
};
exports.PointOfLine = PointOfLine;
