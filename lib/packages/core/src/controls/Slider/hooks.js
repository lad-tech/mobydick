"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectedRail = exports.useWidthLayout = exports.useLowHigh = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const helpers_1 = require("./helpers");
const useLowHigh = (lowProp, highProp, min, max, step) => {
    const validLowProp = lowProp === undefined ? min : (0, helpers_1.clamp)(lowProp, min, max);
    const validHighProp = highProp === undefined ? max : (0, helpers_1.clamp)(highProp, min, max);
    const inPropsRef = (0, react_1.useRef)({
        low: validLowProp,
        high: validHighProp,
        step,
        // These 2 fields will be overwritten below.
        min: validLowProp,
        max: validHighProp,
    });
    const { low: lowState, high: highState } = inPropsRef.current;
    const inPropsRefPrev = { lowPrev: lowState, highPrev: highState };
    // Props have higher priority.
    // If no props are passed, use internal state variables.
    const low = (0, helpers_1.clamp)(lowProp === undefined ? lowState : lowProp, min, max);
    const high = (0, helpers_1.clamp)(highProp === undefined ? highState : highProp, min, max);
    // Always update values of refs so pan responder will have updated values
    Object.assign(inPropsRef.current, { low, high, min, max });
    const setLow = (value) => (inPropsRef.current.low = value);
    const setHigh = (value) => (inPropsRef.current.high = value);
    return { inPropsRef, inPropsRefPrev, setLow, setHigh };
};
exports.useLowHigh = useLowHigh;
/**
 * Sets the current value of widthRef and calls the callback with new width parameter.
 * @param widthRef
 * @param callback
 * @returns {function({nativeEvent: *}): void}
 */
const useWidthLayout = (widthRef, callback) => {
    return (0, react_1.useCallback)((event) => {
        const { layout: { width }, } = event.nativeEvent;
        const { current: w } = widthRef;
        if (w !== width) {
            widthRef.current = width;
            if (callback) {
                callback(width);
            }
        }
    }, [callback, widthRef]);
};
exports.useWidthLayout = useWidthLayout;
const useSelectedRail = (inPropsRef, containerWidthRef, thumbWidth, disableRange) => {
    const { current: left } = (0, react_1.useRef)(new react_native_1.Animated.Value(0));
    const { current: right } = (0, react_1.useRef)(new react_native_1.Animated.Value(0));
    const update = (0, react_1.useCallback)(() => {
        const { low, high, min, max } = inPropsRef.current;
        const { current: containerWidth } = containerWidthRef;
        const fullScale = (max - min) / (containerWidth - thumbWidth);
        const leftValue = (low - min) / fullScale;
        const rightValue = (max - high) / fullScale;
        left.setValue(disableRange ? 0 : leftValue);
        right.setValue(disableRange ? containerWidth - thumbWidth - leftValue : rightValue);
    }, [inPropsRef, containerWidthRef, disableRange, thumbWidth, left, right]);
    const styles = (0, react_1.useMemo)(() => ({
        left: react_native_1.I18nManager.isRTL ? right : left,
        right: react_native_1.I18nManager.isRTL ? left : right,
    }), [left, right]);
    return [styles, update];
};
exports.useSelectedRail = useSelectedRail;
