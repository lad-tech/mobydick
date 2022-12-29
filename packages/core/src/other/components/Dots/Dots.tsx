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
  WIDTH_LARGE,
  WIDTH_MEDIUM,
  WIDTH_SMALL,
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
  const currentWidth = useRef(WIDTH_SMALL);
  const halve = Math.floor((SPAN_SIZE - 1) / 2);
  const isFirstHalve = activeDot < Math.floor(length / 2);
  const isDynamicDots = length < 7;

  const numConsumed = isFirstHalve
    ? Math.max(activeDot - halve, 0)
    : Math.min(activeDot + halve, length - 1) - activeDot;

  const i = useRef(
    isFirstHalve
      ? activeDot - numConsumed
      : activeDot - (SPAN_SIZE - 1 - numConsumed),
  );
  const j = useRef(
    isFirstHalve
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
  function getWidth() {
    if (i.current === 0 || length - 1 - j.current === 0) {
      currentWidth.current = WIDTH_SMALL;
    } else if (i.current === 1 || length - 1 - j.current === 1) {
      currentWidth.current = WIDTH_MEDIUM;
    } else {
      currentWidth.current = WIDTH_LARGE;
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

    getWidth();

    const indicatorRight = () => {
      if (index > SPAN_SIZE) {
        return index - 4;
      } else {
        return index - 3;
      }
    };

    const indicatorLeft = () => {
      if (index < SPAN_SIZE || index === length - 1) {
        return index - 3;
      } else {
        return index - 2;
      }
    };

    const moveTo = Math.max(
      0,
      (direction.current > 0 ? indicatorRight() : indicatorLeft()) *
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

  if (isDynamicDots) {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {dots.map(i => (
          <Dot key={i} active={i === activeDot} size={size(i)} />
        ))}
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
      }}>
      <ScrollView
        ref={refScrollView}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        bounces={false}
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {dots.map(dot => (
          <Dot key={dot} active={dot === activeDot} size={size(dot)} />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default Dots;
