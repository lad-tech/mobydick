"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Indicator = props => {
    const { percent, indicatorViewStyles, indicatorStyles } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const percentAnimated = (0, react_1.useRef)(new react_native_1.Animated.Value(percent)).current;
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(percentAnimated, {
            toValue: percent,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [percent]);
    const width = percentAnimated.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
    });
    return (<View_1.default style={[styles.indicatorView, indicatorViewStyles]}>
      <react_native_1.Animated.View style={[
            styles.indicator,
            [react_native_1.StyleSheet.absoluteFill],
            { width },
            indicatorStyles,
        ]}/>
    </View_1.default>);
};
exports.default = Indicator;
