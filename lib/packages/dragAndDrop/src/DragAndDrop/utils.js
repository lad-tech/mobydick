"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationConfig = exports.getOrder = exports.getPosition = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const getPosition = ({ index, col, width, height, }) => {
    'worklet';
    return {
        x: (index % col) * width,
        y: Math.floor(index / col) * height,
    };
};
exports.getPosition = getPosition;
const getOrder = ({ tx, ty, max, col, width, height, }) => {
    'worklet';
    const x = Math.round(tx / width) * width;
    const y = Math.round(ty / height) * height;
    const row = Math.max(y, 0) / height;
    const columns = Math.max(x, 0) / width;
    return Math.min(row * col + columns, max);
};
exports.getOrder = getOrder;
exports.animationConfig = {
    easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.ease),
    duration: 350,
};
