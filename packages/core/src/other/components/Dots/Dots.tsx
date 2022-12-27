import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, Animated} from 'react-native';

import rem from '../../../styles/spaces/rem';

import Dot from './Dot';
import {
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

  // const numConsumed = Math.min(activeDot + halve, length - 1) - activeDot;
  const numConsumed = isFirstHalve
    ? Math.max(activeDot - halve, 0)
    : Math.min(activeDot + halve, length - 1) - activeDot;
  // const numConsumed = Math.max(activeDot - halve, 0);

  // const i = useRef(activeDot - (SPAN_SIZE - 1 - numConsumed));
  // const j = useRef(activeDot + numConsumed);

  // const mid = i +

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

  // const i = useRef(activeDot - numConsumed);
  // const j = useRef(activeDot + (SPAN_SIZE - 1 - numConsumed));

  //   c
  // 0,1,2,3,4,5
  //     s

  function updateIndexes(direction: number, currentIndex: number) {
    if (direction === -1) {
      i.current = Math.min(currentIndex, i.current);
      j.current = Math.min(i.current + (SPAN_SIZE - 1), j.current);
    } else if (direction === 1) {
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

  const scrollTo = (index: number, animated: boolean) => {
    if (!refScrollView.current) return;

    direction.current = getDirection(activeDot, prevIndex);

    updateIndexes(direction.current, activeDot);

    setPrevIndex(activeDot);

    getWidth();

    const indicatorRight = () => {
      if (index <= SPAN_SIZE || index === length - 2 || index === length - 1) {
        return index - 3;
      } else {
        return index - 4;
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
        (rem(4) + rem(5) * 2),
    );

    console.log('index', direction.current, index, indicatorRight(), moveTo);

    refScrollView.current.scrollTo({
      x: moveTo,
      y: 0,
      animated: animated,
    });
  };

  useEffect(() => {
    scrollTo(activeDot, true);
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

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#ff9000',
          width: currentWidth.current,
        },
      ]}
      onLayout={() => {
        //scroll to right index on initial render
        // сейчас костыльно работает, но есть скачок, который мне не нравится, завтра буду продолжать бороться
        if (activeDot === 0 || activeDot === 8 || activeDot === 9)
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
        {dots.map(i => (
          <Dot key={i} active={i === activeDot} size={size(i)} />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default Dots;
