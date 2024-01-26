import {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  GestureResponderEvent,
  Insets,
  PanResponder,
  PanResponderGestureState,
  ViewProps,
  Easing,
} from 'react-native';

import View from '../../basic/components/View/View';
import useStyles from '../../styles/theme/hooks/useStyles';
import {LABELS} from '../../other/constants';
import {HIT_SLOP} from '../../styles';
import rem from '../../styles/spaces/rem';

import {clamp, getValueForPosition, isLowCloser} from './helpers';
import stylesCreate from './stylesCreate';
import {useLowHigh, useSelectedRail, useWidthLayout} from './hooks';
import HighThumb from './components/HighThumb';
import Rail from './components/Rail';
import LowThumb from './components/LowThumb';

const trueFunc = () => true;
const falseFunc = () => false;

export interface ISliderProps extends ViewProps {
  min: number;
  max: number;
  step: number;
  minRange?: number;
  low?: number;
  high?: number;
  disableRange?: boolean;
  disabled?: boolean;
  onValueChanged?: (low: number, high: number, byUser: boolean) => void;
  hitSlop?: Insets;
}
const THUMB_RADIUS_LOW = rem(12) * 2;
const THUMB_RADIUS_HIGH = THUMB_RADIUS_LOW + rem(6);

const Slider: React.FC<ISliderProps> = ({
  min,
  max,
  minRange = 0,
  step,
  low: lowProp,
  high: highProp,
  disableRange = false,
  disabled = false,
  onValueChanged,
  hitSlop = HIT_SLOP.large,
  ...restProps
}) => {
  const {inPropsRef, inPropsRefPrev, setLow, setHigh} = useLowHigh(
    lowProp,
    disableRange ? max : highProp,
    min,
    max,
    step,
  );
  const [styles] = useStyles(stylesCreate);

  const lowThumbXRef = useRef(new Animated.Value(0));
  const highThumbXRef = useRef(new Animated.Value(0));
  const lowSize = useRef(new Animated.Value(THUMB_RADIUS_LOW)).current;
  const highSize = useRef(new Animated.Value(THUMB_RADIUS_LOW)).current;
  const pointerX = useRef(new Animated.Value(0)).current;
  const {current: lowThumbX} = lowThumbXRef;
  const {current: highThumbX} = highThumbXRef;

  const gestureStateRef = useRef({isLow: true, lastValue: 0, lastPosition: 0});

  const containerWidthRef = useRef(0);
  const [selectedRailStyle, updateSelectedRail] = useSelectedRail(
    inPropsRef,
    containerWidthRef,
    THUMB_RADIUS_LOW,
    disableRange,
  );

  const updateThumbs = useCallback(() => {
    const {current: containerWidth} = containerWidthRef;

    const {low, high} = inPropsRef.current;
    if (!disableRange) {
      const {current: highThumbX} = highThumbXRef;
      const highPosition =
        ((high - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
      highThumbX.setValue(highPosition);
    }
    const {current: lowThumbX} = lowThumbXRef;
    const lowPosition =
      ((low - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
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

  useEffect(() => {
    const {lowPrev, highPrev} = inPropsRefPrev;
    if (
      (lowProp !== undefined && lowProp !== lowPrev) ||
      (highProp !== undefined && highProp !== highPrev)
    ) {
      updateThumbs();
    }
  }, [highProp, inPropsRefPrev.lowPrev, inPropsRefPrev.highPrev, lowProp]);

  useEffect(() => {
    updateThumbs();
  }, [updateThumbs]);

  const handleContainerLayout = useWidthLayout(containerWidthRef, updateThumbs);

  function getLow(downX: number, lowPosition: number, highPosition: number) {
    return disableRange || isLowCloser(downX, lowPosition, highPosition);
  }

  const handlePositionChange = (
    positionInView: number,
    isLow: boolean,
    containerWidth: number,
  ) => {
    const {low, high, min, max, step} = inPropsRef.current;
    const minValue = isLow ? min : low + minRange;
    const maxValue = isLow ? high - minRange : max;
    const value = clamp(
      getValueForPosition(
        positionInView,
        containerWidth,
        THUMB_RADIUS_LOW,
        min,
        max,
        step,
      ),
      minValue,
      maxValue,
    );
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

  const animatedLow = useCallback(
    (value: number) => {
      Animated.timing(lowSize, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    },
    [lowSize],
  );

  const animatedHigh = useCallback(
    (value: number) => {
      Animated.timing(highSize, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    },
    [highSize],
  );

  const {panHandlers} = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponderCapture: falseFunc,
        onMoveShouldSetPanResponderCapture: trueFunc,
        onPanResponderTerminationRequest: falseFunc,
        onPanResponderTerminate: trueFunc,
        onShouldBlockNativeResponder: trueFunc,
        onMoveShouldSetPanResponder: (
          _evt: GestureResponderEvent,
          gestureState: PanResponderGestureState,
        ) => Math.abs(gestureState.dx) > 2 * Math.abs(gestureState.dy),

        onPanResponderGrant: ({nativeEvent}, gestureState) => {
          if (disabled) {
            return;
          }

          const {numberActiveTouches} = gestureState;
          if (numberActiveTouches > 1) {
            return;
          }
          const {locationX: downX, pageX} = nativeEvent;
          const containerX = pageX - downX;

          const {low, high, min, max} = inPropsRef.current;
          const containerWidth = containerWidthRef.current;

          const lowPosition =
            THUMB_RADIUS_LOW / 2 +
            ((low - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);
          const highPosition =
            THUMB_RADIUS_LOW / 2 +
            ((high - min) / (max - min)) * (containerWidth - THUMB_RADIUS_LOW);

          const isLow = getLow(downX, lowPosition, highPosition);
          gestureStateRef.current.isLow = isLow;

          if (isLow) {
            animatedLow(THUMB_RADIUS_HIGH);
          } else {
            animatedHigh(THUMB_RADIUS_HIGH);
          }
          handlePositionChange(downX, isLow, containerWidth);
          pointerX.removeAllListeners();
          pointerX.addListener(({value: pointerPosition}) => {
            const positionInView = pointerPosition - containerX;
            handlePositionChange(positionInView, isLow, containerWidth);
          });
        },

        onPanResponderMove: disabled
          ? undefined
          : Animated.event([null, {moveX: pointerX}], {useNativeDriver: false}),
        onPanResponderRelease: () => {
          animatedLow(THUMB_RADIUS_LOW);
          animatedHigh(THUMB_RADIUS_LOW);
        },
      }),
    [
      pointerX,
      inPropsRef,
      THUMB_RADIUS_LOW,
      disableRange,
      disabled,
      onValueChanged,
      setLow,
      setHigh,
      updateSelectedRail,
    ],
  );

  return (
    <View {...restProps}>
      <View onLayout={handleContainerLayout} style={styles.controlsContainer}>
        <Rail
          selectedRailStyle={selectedRailStyle}
          thumbWidth={THUMB_RADIUS_LOW}
        />
        <LowThumb lowThumbX={lowThumbX} size={lowSize} />
        {!disableRange && (
          <HighThumb highThumbX={highThumbX} highSize={highSize} />
        )}
        <View
          {...panHandlers}
          hitSlop={hitSlop}
          style={styles.touchableArea}
          accessibilityLabel={LABELS.slider}
          collapsable={false}
        />
      </View>
    </View>
  );
};

export default Slider;
