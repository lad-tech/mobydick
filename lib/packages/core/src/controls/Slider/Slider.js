"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const constants_1 = require("../../other/constants");
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const helpers_1 = require("./helpers");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const hooks_1 = require("./hooks");
const HighThumb_1 = __importDefault(require("./components/HighThumb"));
const Rail_1 = __importDefault(require("./components/Rail"));
const LowThumb_1 = __importDefault(require("./components/LowThumb"));
const trueFunc = () => true;
const falseFunc = () => false;
const THUMB_RADIUS_LOW = (0, px_1.default)(12) * 2;
const THUMB_RADIUS_HIGH = THUMB_RADIUS_LOW + (0, px_1.default)(6);
const Slider = ({ min, max, minRange = 0, step, low: lowProp, high: highProp, disableRange = false, disabled = false, onValueChanged, hitSlop = styles_1.HIT_SLOP.large, ...restProps }) => {
    const { inPropsRef, inPropsRefPrev, setLow, setHigh } = (0, hooks_1.useLowHigh)(lowProp, disableRange ? max : highProp, min, max, step);
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const lowThumbXRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0));
    const highThumbXRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0));
    const lowSize = (0, react_1.useRef)(new react_native_1.Animated.Value(THUMB_RADIUS_LOW)).current;
    const highSize = (0, react_1.useRef)(new react_native_1.Animated.Value(THUMB_RADIUS_LOW)).current;
    const pointerX = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const { current: lowThumbX } = lowThumbXRef;
    const { current: highThumbX } = highThumbXRef;
    const gestureStateRef = (0, react_1.useRef)({ isLow: true, lastValue: 0, lastPosition: 0 });
    const containerWidthRef = (0, react_1.useRef)(0);
    const [selectedRailStyle, updateSelectedRail] = (0, hooks_1.useSelectedRail)(inPropsRef, containerWidthRef, THUMB_RADIUS_LOW, disableRange);
    const updateThumbs = (0, react_1.useCallback)(() => {
        const { current: containerWidth } = containerWidthRef;
        const { low, high } = inPropsRef.current;
        if (!disableRange) {
            const { current: highThumbX } = highThumbXRef;
            const highPosition = ((high - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
            highThumbX.setValue(highPosition);
        }
        const { current: lowThumbX } = lowThumbXRef;
        const lowPosition = ((low - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
        lowThumbX.setValue(lowPosition);
        updateSelectedRail();
        onValueChanged?.(low, high, false);
    }, [
        disableRange,
        inPropsRef,
        max,
        min,
        THUMB_RADIUS_LOW,
        updateSelectedRail,
    ]);
    (0, react_1.useEffect)(() => {
        const { lowPrev, highPrev } = inPropsRefPrev;
        if ((lowProp !== undefined && lowProp !== lowPrev) ||
            (highProp !== undefined && highProp !== highPrev)) {
            updateThumbs();
        }
    }, [highProp, inPropsRefPrev.lowPrev, inPropsRefPrev.highPrev, lowProp]);
    (0, react_1.useEffect)(() => {
        updateThumbs();
    }, [updateThumbs]);
    const handleContainerLayout = (0, hooks_1.useWidthLayout)(containerWidthRef, updateThumbs);
    function getLow(downX, lowPosition, highPosition) {
        return disableRange || (0, helpers_1.isLowCloser)(downX, lowPosition, highPosition);
    }
    const handlePositionChange = (positionInView, isLow, containerWidth) => {
        const { low, high, min, max, step } = inPropsRef.current;
        const minValue = isLow ? min : low + minRange;
        const maxValue = isLow ? high - minRange : max;
        const value = (0, helpers_1.clamp)((0, helpers_1.getValueForPosition)(positionInView, containerWidth, THUMB_RADIUS_LOW, min, max, step), minValue, maxValue);
        if (gestureStateRef.current.lastValue === value) {
            return;
        }
        const availableSpace = containerWidth - THUMB_RADIUS_LOW;
        const absolutePosition = ((value - min) / (max - min)) * availableSpace;
        gestureStateRef.current.lastValue = value;
        gestureStateRef.current.lastPosition =
            absolutePosition + THUMB_RADIUS_LOW / 2;
        (isLow ? lowThumbX : highThumbX).setValue(absolutePosition);
        onValueChanged?.(isLow ? value : low, isLow ? high : value, true);
        (isLow ? setLow : setHigh)(value);
        updateSelectedRail();
    };
    const animatedLow = (0, react_1.useCallback)((value) => {
        react_native_1.Animated.timing(lowSize, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
            easing: react_native_1.Easing.ease,
        }).start();
    }, [lowSize]);
    const animatedHigh = (0, react_1.useCallback)((value) => {
        react_native_1.Animated.timing(highSize, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
            easing: react_native_1.Easing.ease,
        }).start();
    }, [highSize]);
    const { panHandlers } = (0, react_1.useMemo)(() => react_native_1.PanResponder.create({
        onStartShouldSetPanResponderCapture: falseFunc,
        onMoveShouldSetPanResponderCapture: trueFunc,
        onPanResponderTerminationRequest: falseFunc,
        onPanResponderTerminate: trueFunc,
        onShouldBlockNativeResponder: trueFunc,
        onMoveShouldSetPanResponder: (_evt, gestureState) => Math.abs(gestureState.dx) > 2 * Math.abs(gestureState.dy),
        onPanResponderGrant: ({ nativeEvent }, gestureState) => {
            if (disabled) {
                return;
            }
            const { numberActiveTouches } = gestureState;
            if (numberActiveTouches > 1) {
                return;
            }
            const { locationX: downX, pageX } = nativeEvent;
            const containerX = pageX - downX;
            const { low, high, min, max } = inPropsRef.current;
            const containerWidth = containerWidthRef.current;
            const lowPosition = THUMB_RADIUS_LOW / 2 +
                ((low - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
            const highPosition = THUMB_RADIUS_LOW / 2 +
                ((high - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
            const isLow = getLow(downX, lowPosition, highPosition);
            gestureStateRef.current.isLow = isLow;
            if (isLow) {
                animatedLow(THUMB_RADIUS_HIGH);
            }
            else {
                animatedHigh(THUMB_RADIUS_HIGH);
            }
            handlePositionChange(downX, isLow, containerWidth);
            pointerX.removeAllListeners();
            pointerX.addListener(({ value: pointerPosition }) => {
                const positionInView = pointerPosition - containerX;
                handlePositionChange(positionInView, isLow, containerWidth);
            });
        },
        onPanResponderMove: disabled
            ? undefined
            : react_native_1.Animated.event([null, { moveX: pointerX }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            animatedLow(THUMB_RADIUS_LOW);
            animatedHigh(THUMB_RADIUS_LOW);
        },
    }), [
        pointerX,
        inPropsRef,
        THUMB_RADIUS_LOW,
        disableRange,
        disabled,
        onValueChanged,
        setLow,
        setHigh,
        updateSelectedRail,
    ]);
    return (<View_1.default {...restProps}>
      <View_1.default onLayout={handleContainerLayout} style={styles.controlsContainer}>
        <Rail_1.default selectedRailStyle={selectedRailStyle} thumbWidth={THUMB_RADIUS_LOW}/>
        <LowThumb_1.default lowThumbX={lowThumbX} size={lowSize}/>
        {!disableRange && (<HighThumb_1.default highThumbX={highThumbX} highSize={highSize}/>)}
        <View_1.default {...panHandlers} hitSlop={hitSlop} style={styles.touchableArea} accessibilityLabel={constants_1.LABELS.slider} collapsable={false}/>
      </View_1.default>
    </View_1.default>);
};
exports.default = Slider;
