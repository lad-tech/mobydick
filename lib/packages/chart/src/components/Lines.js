"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lines = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const LineOfPeriod_1 = __importDefault(require("./LineOfPeriod"));
const Lines = ({ periodsWithPaths, size, state, transition, hideDataPoints, }) => {
    const lines = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { next } = state.value;
        const end = periodsWithPaths.value[next]?.lines ?? [];
        return end;
    });
    return (<>
      {lines.value.map(({ colors }, index) => (<LineOfPeriod_1.default key={index} index={index} size={size} periodsWithPaths={periodsWithPaths} lineColors={colors} state={state} transition={transition} hideDataPoints={hideDataPoints}/>))}
    </>);
};
exports.Lines = Lines;
