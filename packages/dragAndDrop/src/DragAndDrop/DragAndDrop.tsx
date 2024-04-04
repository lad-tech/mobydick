import {FC, PropsWithChildren} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  scrollTo,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

import {IDragAndDropProps} from './types';
import {animationConfig, getOrder, getPosition} from './utils';

const DragAndDrop: FC<PropsWithChildren<IDragAndDropProps>> = ({
  children,
  positions,
  id,
  scrollY,
  scrollView,
  columns,
  itemWidth,
  itemHeight,
  heightScrollView,
}) => {
  const position = getPosition({
    index: positions.value[id]!,
    col: columns,
    height: itemHeight,
    width: itemWidth,
  });

  const x = useSharedValue(position.x);
  const y = useSharedValue(position.y);

  const isGestureActive = useSharedValue(false);

  const containerHeight = heightScrollView;

  const contentHeight =
    Math.ceil(Object.keys(positions.value).length / columns) * itemHeight;

  useAnimatedReaction(
    () => positions.value[id]!,
    newOrder => {
      const newPositions = getPosition({
        index: newOrder,
        col: columns,
        height: itemHeight,
        width: itemWidth,
      });
      x.value = withTiming(newPositions.x, animationConfig);
      y.value = withTiming(newPositions.y, animationConfig);
    },
  );

  const animatedStyle = useAnimatedStyle(() => {
    const zIndex = isGestureActive.value ? 100 : 0;
    const scale = isGestureActive.value ? 1.1 : 1;
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: itemWidth,
      height: itemHeight,
      zIndex,
      transform: [{translateX: x.value}, {translateY: y.value}, {scale}],
    };
  });

  const pan = Gesture.Pan()
    .onStart(event => {
      x.value = x.value + event.translationX;
      y.value = y.value + event.translationY;
      isGestureActive.value = true;
    })
    .onChange(event => {
      x.value = x.value + event.changeX;
      y.value = y.value + event.changeY;
      // 1. We calculate where the tile should be
      const newOrder = getOrder({
        tx: x.value,
        ty: y.value,
        max: Object.keys(positions.value).length - 1,
        col: columns,
        width: itemWidth,
        height: itemHeight,
      });
      // 2. We swap the positions
      const oldOrder = positions.value[id];
      if (newOrder !== oldOrder) {
        const idToSwap = Object.keys(positions.value).find(
          key => positions.value[key] === newOrder,
        );
        if (idToSwap) {
          // Spread operator is not supported in worklets
          // And Object.assign doesn't seem to be working on alpha.6
          const newPositions = JSON.parse(JSON.stringify(positions.value));
          newPositions[id] = newOrder;
          newPositions[idToSwap] = oldOrder;
          positions.value = newPositions;
        }
      }

      // 3. Scroll
      const lowerBound = scrollY.value;
      const upperBound = lowerBound + containerHeight - itemHeight;
      const maxScroll = contentHeight - containerHeight;
      const leftToScrollDown = maxScroll - scrollY.value;

      if (y.value < lowerBound) {
        const diff = Math.min(lowerBound - y.value, lowerBound);
        scrollY.value -= diff;
        y.value -= diff;
        scrollTo(scrollView, 0, scrollY.value, false);
      }
      if (y.value > upperBound) {
        const diff = Math.min(y.value - upperBound, leftToScrollDown);
        scrollY.value += diff;
        y.value += diff;
        scrollTo(scrollView, 0, scrollY.value, false);
      }
    })
    .onEnd(_ => {
      const destination = getPosition({
        index: positions.value[id]!,
        col: columns,
        height: itemHeight,
        width: itemWidth,
      });
      x.value = withTiming(
        destination.x,
        animationConfig,
        () => (isGestureActive.value = false),
      );

      y.value = withTiming(
        destination.y,
        animationConfig,
        () => (isGestureActive.value = false),
      );
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyle}>
        <Animated.View style={StyleSheet.absoluteFill}>
          {children}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default DragAndDrop;
