import React, {useCallback, useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import rem from '../../../styles/spaces/rem';

import {ICarouselAlign, ICarouselProps} from './types';
import Carousel from './Carousel';

const LoopCarousel = <T,>({
  data,
  sideMargin = rem(10),
  itemWidth,
  align = ICarouselAlign.start,
  ...otherProps
}: Omit<ICarouselProps<T>, 'keyExtractor' | 'autoScroll'>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [infinityData, setInfinityData] = useState([...data, ...data, ...data]);

  const widthSnap = itemWidth + sideMargin * 2;
  const widthData = widthSnap * data.length;
  const {width: WIDTH} = useSafeAreaFrame();
  const emptySpace = WIDTH - widthSnap;

  const initScroll = useCallback(() => {
    ref.current?.scrollToOffset({
      offset:
        align === ICarouselAlign.center
          ? widthData - emptySpace / 2
          : widthData,
      animated: false,
    });
  }, [align, widthData, emptySpace]);

  const keyExtractorDefault = useCallback((item: T, index?: number) => {
    return String(index) + String(item);
  }, []);

  const checkScroll = useCallback(
    ({contentOffset}: NativeScrollEvent) => {
      if (!contentOffset.x) {
        ref.current?.scrollToOffset({
          offset: widthData,
          animated: false,
        });
      }
    },
    [widthData],
  );
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      checkScroll(event.nativeEvent);
    },
    [checkScroll],
  );

  const onEndReached = useCallback(
    () => setInfinityData([...infinityData, ...data]),
    [data, infinityData],
  );

  return (
    <Carousel
      onLayout={initScroll}
      data={infinityData}
      keyExtractor={keyExtractorDefault}
      itemWidth={itemWidth}
      onScroll={onScroll}
      onEndReached={onEndReached}
      initialNumToRender={data.length + 5}
      align={align}
      sideMargin={sideMargin}
      {...otherProps}
    />
  );
};

export default LoopCarousel;
