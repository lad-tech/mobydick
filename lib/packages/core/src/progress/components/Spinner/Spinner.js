"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const Loader_1 = __importDefault(require("./Loader"));
const types_1 = require("./types");
const Spinner = props => {
    const { duration = 2500, size = types_1.ISizeSpinner.S, fill, ...otherProps } = props;
    const { colors } = (0, useTheme_1.default)();
    const spinValue = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(() => {
        const loop = react_native_1.Animated.loop(react_native_1.Animated.timing(spinValue, {
            useNativeDriver: true,
            toValue: 1,
            duration,
        }));
        loop.start();
        return () => {
            loop.stop();
            spinValue.setValue(0);
        };
    }, [duration]);
    const rotation = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    return (<react_native_1.Animated.View style={{ alignSelf: 'center', transform: [{ rotate: rotation }] }}>
      <Loader_1.default size={size} fill={fill || colors.ElementBase} {...otherProps}/>
    </react_native_1.Animated.View>);
};
exports.default = Spinner;
