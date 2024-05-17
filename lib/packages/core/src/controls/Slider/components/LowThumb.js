"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const other_1 = require("../../../other");
const Thumb_1 = __importDefault(require("./Thumb"));
const LowThumb = ({ lowThumbX, size, }) => {
    const lowStyles = (0, react_1.useMemo)(() => {
        return { transform: [{ translateX: lowThumbX }] };
    }, [lowThumbX]);
    return (<react_native_1.Animated.View style={lowStyles} accessibilityLabel={other_1.LABELS.sliderLayoutLowThumb}>
      <Thumb_1.default size={size}/>
    </react_native_1.Animated.View>);
};
exports.default = LowThumb;
