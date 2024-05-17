"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scale = void 0;
const react_native_1 = require("react-native");
const guidelineBaseWidth = 375;
const scale = (size) => {
    const { width, height } = react_native_1.Dimensions.get('window');
    if (width < height) {
        return (width / guidelineBaseWidth) * size;
    }
    else {
        return (height / guidelineBaseWidth) * size;
    }
};
exports.scale = scale;
/**
 * @deprecated Bad working with large screens use `px` instead
 */
const rem = (size, factor = 0.5) => {
    const newSize = size + ((0, exports.scale)(size) - size) * factor;
    return react_native_1.PixelRatio.roundToNearestPixel(newSize);
};
exports.default = rem;
