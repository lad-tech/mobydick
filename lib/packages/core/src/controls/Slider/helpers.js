"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueForPosition = exports.clamp = exports.isLowCloser = void 0;
const isLowCloser = (downX, lowPosition, highPosition) => {
    if (lowPosition === highPosition) {
        return downX < lowPosition;
    }
    const distanceFromLow = Math.abs(downX - lowPosition);
    const distanceFromHigh = Math.abs(downX - highPosition);
    return distanceFromLow < distanceFromHigh;
};
exports.isLowCloser = isLowCloser;
const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};
exports.clamp = clamp;
const getValueForPosition = (positionInView, containerWidth, thumbWidth, min, max, step) => {
    const availableSpace = containerWidth - thumbWidth;
    const relStepUnit = step / (max - min);
    let relPosition = (positionInView - thumbWidth / 2) / availableSpace;
    const relOffset = relPosition % relStepUnit;
    relPosition -= relOffset;
    if (relOffset / relStepUnit >= 0.5) {
        relPosition += relStepUnit;
    }
    return (0, exports.clamp)(min + Math.round(relPosition / relStepUnit) * step, min, max);
};
exports.getValueForPosition = getValueForPosition;
