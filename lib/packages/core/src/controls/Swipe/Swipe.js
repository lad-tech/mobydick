"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const other_1 = require("../../other");
const px_1 = __importDefault(require("../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const leftPos = -20;
const rightPos = 20;
const Swipe = ({ active, disabled, onPress }) => {
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default, disabled);
    const defaultState = active ? rightPos : leftPos;
    const pan = (0, react_1.useRef)(new react_native_1.Animated.Value(defaultState)).current;
    const distance = (0, react_1.useRef)(defaultState);
    (0, react_1.useEffect)(() => {
        if (active) {
            return swipeRight();
        }
        else {
            return swipeLeft();
        }
    }, [active, disabled]);
    const swipeRight = () => {
        distance.current = rightPos;
        react_native_1.Animated.timing(pan, {
            toValue: +rightPos,
            duration: 300,
            useNativeDriver: false,
            easing: react_native_1.Easing.ease,
        }).start();
    };
    const swipeLeft = () => {
        distance.current = leftPos;
        react_native_1.Animated.timing(pan, {
            toValue: +leftPos,
            duration: 300,
            useNativeDriver: false,
            easing: react_native_1.Easing.ease,
        }).start();
    };
    const handlePanResponderRelease = (_, gestureState) => {
        pan.flattenOffset();
        if (gestureState.dx === 0) {
            onPress(distance.current > 0 ? false : true);
            return distance.current > 0 ? swipeLeft() : swipeRight();
        }
        if (gestureState.dx > 0) {
            distance.current !== rightPos && onPress(true);
            return swipeRight();
        }
        else {
            distance.current !== leftPos && onPress(false);
            return swipeLeft();
        }
    };
    const panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onPanResponderGrant: () => {
            pan.setOffset(distance.current);
        },
        onPanResponderMove: react_native_1.Animated.event([null, { dx: pan }], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: handlePanResponderRelease,
    })).current;
    const backgroundColor = pan.interpolate({
        inputRange: [leftPos, rightPos],
        outputRange: [theme.colors.ElementMuted, theme.colors.ElementBase],
        extrapolate: 'clamp',
    });
    const translateX = pan.interpolate({
        inputRange: [leftPos, rightPos],
        outputRange: [0, (0, px_1.default)(20)],
        extrapolate: 'clamp',
    });
    return (<react_native_1.Animated.View style={[styles.container, { backgroundColor }]} needsOffscreenAlphaCompositing={true} accessibilityLabel={other_1.LABELS.swipe} {...panResponder.panHandlers}>
      <react_native_1.Animated.View style={[styles.switcher, { transform: [{ translateX }] }]}/>
    </react_native_1.Animated.View>);
};
exports.default = Swipe;
