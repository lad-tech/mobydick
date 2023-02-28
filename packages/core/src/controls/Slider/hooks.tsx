import {useCallback, useRef, useMemo, MutableRefObject} from 'react';
import {Animated, I18nManager} from 'react-native';

import {clamp} from './helpers';

export const useLowHigh = (
  lowProp: number | undefined,
  highProp: number | undefined,
  min: number,
  max: number,
  step: number,
) => {
  const validLowProp = lowProp === undefined ? min : clamp(lowProp, min, max);
  const validHighProp =
    highProp === undefined ? max : clamp(highProp, min, max);
  const inPropsRef = useRef({
    low: validLowProp,
    high: validHighProp,
    step,
    // These 2 fields will be overwritten below.
    min: validLowProp,
    max: validHighProp,
  });
  const {low: lowState, high: highState} = inPropsRef.current;
  const inPropsRefPrev = {lowPrev: lowState, highPrev: highState};

  // Props have higher priority.
  // If no props are passed, use internal state variables.
  const low = clamp(lowProp === undefined ? lowState : lowProp, min, max);
  const high = clamp(highProp === undefined ? highState : highProp, min, max);

  // Always update values of refs so pan responder will have updated values
  Object.assign(inPropsRef.current, {low, high, min, max});

  const setLow = (value: number) => (inPropsRef.current.low = value);
  const setHigh = (value: number) => (inPropsRef.current.high = value);
  return {inPropsRef, inPropsRefPrev, setLow, setHigh};
};

/**
 * Sets the current value of widthRef and calls the callback with new width parameter.
 * @param widthRef
 * @param callback
 * @returns {function({nativeEvent: *}): void}
 */
export const useWidthLayout = (
  widthRef: MutableRefObject<number>,
  callback?: (width: number) => void,
) => {
  return useCallback(
    ({nativeEvent}) => {
      const {
        layout: {width},
      } = nativeEvent;
      const {current: w} = widthRef;
      if (w !== width) {
        widthRef.current = width;
        if (callback) {
          callback(width);
        }
      }
    },
    [callback, widthRef],
  );
};

interface IProps {
  low: number;
  high: number;
  min: number;
  max: number;
  step: number;
}

export const useSelectedRail = (
  inPropsRef: MutableRefObject<IProps>,
  containerWidthRef: MutableRefObject<number>,
  thumbWidth: number,
  disableRange: boolean,
) => {
  const {current: left} = useRef(new Animated.Value(0));
  const {current: right} = useRef(new Animated.Value(0));
  const update = useCallback(() => {
    const {low, high, min, max} = inPropsRef.current;
    const {current: containerWidth} = containerWidthRef;
    const fullScale = (max - min) / (containerWidth - thumbWidth);
    const leftValue = (low - min) / fullScale;
    const rightValue = (max - high) / fullScale;
    left.setValue(disableRange ? 0 : leftValue);
    right.setValue(
      disableRange ? containerWidth - thumbWidth - leftValue : rightValue,
    );
  }, [inPropsRef, containerWidthRef, disableRange, thumbWidth, left, right]);
  const styles = useMemo(
    () => ({
      left: I18nManager.isRTL ? right : left,
      right: I18nManager.isRTL ? left : right,
    }),
    [left, right],
  );
  return [styles, update] as const;
};
