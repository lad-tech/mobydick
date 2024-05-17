"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinePoints = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const PointOfLine_1 = require("./PointOfLine");
const LinePoints = ({ chartPath }) => {
    const linePoints = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const cmd = chartPath.value.toCmds() ?? [];
        return cmd;
    });
    return (<>
      {linePoints.value.map((_, pointIndex) => {
            return (<PointOfLine_1.PointOfLine key={`${pointIndex}`} pointIndex={pointIndex} chartPath={chartPath}/>);
        })}
    </>);
};
exports.LinePoints = LinePoints;
