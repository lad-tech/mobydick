"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const Thumb_1 = __importDefault(require("./Thumb"));
const HighThumb = ({ highThumbX, highSize, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<react_native_1.Animated.View style={[
            styles.highThumbContainer,
            { transform: [{ translateX: highThumbX }] },
        ]}>
      <Thumb_1.default size={highSize}/>
    </react_native_1.Animated.View>);
};
exports.default = HighThumb;
