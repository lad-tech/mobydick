import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, Animated} from 'react-native';

import View from '../../../basic/components/View/View';

import Dot from './Dot';
import {
  MARGIN_DOT,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  SPAN_SIZE,
  WIDTH_MEDIUM,
} from './constants';

interface IDots {
  length: number;
  activeDot: number;
  maxDots?: number;
}

function getDirection(newIdx: number, prevIdx: number): number {
  if (newIdx === prevIdx) {
    return 0;
  }
  return newIdx < prevIdx ? -1 : 1;
}

const Dots = ({length, activeDot}: IDots) => {
  const refScrollView = useRef<ScrollView>(null);
  const dots = [...Array(length).keys()];
  const [prevIndex, setPrevIndex] = useState(activeDot);
  const direction = useRef(getDirection(activeDot, prevIndex));
  const half = Math.floor((SPAN_SIZE - 1) / 2);
  const isFirstHalf = activeDot < Math.floor(length / 2);
  const isDynamicDots = length < 7;

  const numConsumed = isFirstHalf
    ? Math.max(activeDot - half, 0)
    : Math.min(activeDot + half, length - 1) - activeDot;

  const i = useRef(
    isFirstHalf
      ? activeDot - numConsumed
      : activeDot - (SPAN_SIZE - 1 - numConsumed),
  );
  const j = useRef(
    isFirstHalf
      ? activeDot + (SPAN_SIZE - 1 - numConsumed)
      : activeDot + numConsumed,
  );

  function updateIndexes(currentDirection: number, currentIndex: number) {
    if (currentDirection === -1) {
      i.current = Math.min(currentIndex, i.current);
      j.current = Math.min(i.current + (SPAN_SIZE - 1), j.current);
    } else if (currentDirection === 1) {
      j.current = Math.max(currentIndex, j.current);
      i.current = Math.max(j.current - (SPAN_SIZE - 1), i.current);
    }
  }

  function setIndexes() {
    direction.current = getDirection(activeDot, prevIndex);

    updateIndexes(direction.current, activeDot);

    setPrevIndex(activeDot);
  }

  const scrollTo = (index: number, animated: boolean) => {
    if (!refScrollView.current) {
      return;
    }

    setIndexes();

    const indicatorRight = () => {
      if (index > SPAN_SIZE) {
        return index - 4;
      } else {
        return index - 3;
      }
    };

    const moveTo = Math.max(
      0,
      (direction.current > 0 ? indicatorRight() : index - 1) *
        (SIZE_SMALL + MARGIN_DOT),
    );
    refScrollView.current.scrollTo({
      x: moveTo,
      y: 0,
      animated: animated,
    });
  };

  useEffect(() => {
    isDynamicDots ? setIndexes() : scrollTo(activeDot, true);
  }, [activeDot]);

  const size = useCallback(
    (k: number) => {
      const left = i.current;
      const right = j.current;

      if (k >= left && k <= right) {
        return SIZE_LARGE;
      }

      if (k === left - 1 && left - 1 >= 0) {
        return SIZE_MEDIUM;
      }

      if (k === right + 1 && right + 1 < length) {
        return SIZE_MEDIUM;
      }

      return SIZE_SMALL;
    },
    [activeDot],
  );

  const renderDot = () => {
    return dots.map(dot => (
      <Dot key={dot} active={dot === activeDot} size={size(dot)} />
    ));
  };

  if (isDynamicDots) {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {renderDot()}
      </View>
    );
  }
  return (
    <Animated.View
      style={[
        {
          width: WIDTH_MEDIUM,
        },
      ]}
      onLayout={() => {
        //scroll to right index on initial render
        scrollTo(activeDot, false);
      }}
      accessibilityLabel={'dotsAnimatedView'}>
      <ScrollView
        ref={refScrollView}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        bounces={false}
        scrollEnabled={false}
        horizontal
        accessibilityLabel={'dotsScrollView'}
        showsHorizontalScrollIndicator={false}>
        {renderDot()}
      </ScrollView>
    </Animated.View>
  );
};

export default Dots;