import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';

import View from '../../../basic/components/View/View';
import rem from '../../../styles/spaces/rem';

import Dot from './Dot';

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

const SPAN_SIZE = 3;

const SIZE_LARGE = 8;
const SIZE_MEDIUM = 6;
const SIZE_SMALL = 4;

const Dots = ({length, activeDot}: IDots) => {
  const refScrollView = useRef<ScrollView>(null);
  const dots = [...Array(length).keys()];
  const [prevIndex, setPrevIndex] = useState(activeDot);
  const direction = useRef(getDirection(activeDot, prevIndex));

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

  const scrollTo = (index: number) => {
    if (!refScrollView.current) return;

    direction.current = getDirection(activeDot, prevIndex);

    updateIndexes(direction.current, activeDot);

    setPrevIndex(activeDot);

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
    // console.log(index, indicatorRight(), indicatorLeft());
    const moveTo = Math.max(
      0,
      (direction.current > 0 ? indicatorRight() : indicatorLeft()) *
        (rem(4) + rem(5) * 2),
    );

    console.log(index, indicatorRight(), moveTo);

    refScrollView.current.scrollTo({
      x: moveTo,
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    scrollTo(activeDot);
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
  const getWidthLeft = useCallback(() => {
    switch (activeDot) {
      case dots[length - 1]:
      case dots[length - 2]:
      case dots[length - 3]:
      case dots[0]:
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) +
            (rem(4) + rem(5) * 2),
        };
      case dots[length - 4]:
      case dots[1]:
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) * 2 +
            (rem(4) + rem(5) * 2),
        };
      default: {
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) * 2 +
            (rem(4) + rem(5) * 2) * 2,
        };
      }
    }
  }, [activeDot]);

  const getWidthRight = useCallback(() => {
    switch (activeDot) {
      case dots[0]:
      case dots[1]:
      case dots[2]:
      case dots[length - 1]:
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) +
            (rem(4) + rem(5) * 2),
        };
      case dots[3]:
      case dots[length - 2]:
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) * 2 +
            (rem(4) + rem(5) * 2),
        };
      default: {
        return {
          width:
            (rem(8) + rem(5) * 2) * 3 +
            (rem(6) + rem(5) * 2) * 2 +
            (rem(4) + rem(5) * 2) * 2,
        };
      }
    }
  }, [activeDot]);

  return (
    <View
      style={direction.current > 0 ? getWidthRight() : getWidthLeft()}
      // onLayout={() => {
      //   // scroll to right index on initial render
      //   scrollTo(activeDot);
      // }}
    >
      <ScrollView
        ref={refScrollView}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {dots.map(i => (
          <Dot key={i} active={i === activeDot} size={size(i)} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Dots;
