"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineOfPeriod = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const Line_1 = __importDefault(require("./Line"));
const LinePoints_1 = require("./LinePoints");
const LineOfPeriod = ({ periodsWithPaths, index, size, transition, state, hideDataPoints, }) => {
    const chartPath = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current]?.lines[index]?.path ?? react_native_skia_1.Skia.Path.Make();
        const end = periodsWithPaths.value[next]?.lines[index]?.path ?? react_native_skia_1.Skia.Path.Make();
        if (end.isInterpolatable(start)) {
            return end.interpolate(start, transition.value);
        }
        return end;
    });
    const colors = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current]?.lines[index]?.colors ?? [];
        const end = periodsWithPaths.value[next]?.lines[index]?.colors ?? [];
        return end.map((endColor, i) => (0, react_native_skia_1.interpolateColors)(transition.value, [0, 1], [start[i] ?? endColor, endColor]));
    });
    return (<react_native_skia_1.Group>
      <react_native_skia_1.LinearGradient start={(0, react_native_skia_1.vec)(0, 0)} end={(0, react_native_skia_1.vec)(size.value.width, size.value.height)} colors={colors}/>
      <Line_1.default chartPath={chartPath}/>
      {hideDataPoints ? null : <LinePoints_1.LinePoints chartPath={chartPath}/>}
    </react_native_skia_1.Group>);
};
exports.LineOfPeriod = LineOfPeriod;
exports.default = exports.LineOfPeriod;
