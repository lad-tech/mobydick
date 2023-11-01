import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';
import Dots from '../Dots/Dots';
import {isNumber} from '../../functions/isNumber';

import stylesCreate from './stylesCreate';
import {ICarouselAlign, ICarouselProps} from './types';

interface IError {
  index: number;
  highestMeasuredFrameIndex: number;
  averageItemLength: number;
}

const Carousel = <T,>({
  data,
  sliderItem,
  keyExtractor,
  loading = false,
  sideMargin = rem(10),
  itemWidth,
  onPressItem,
  activeItemId,
  averageItemLength,
  animateAutoScroll = false,
  isDots = false,
  onActiveChange,
  align = ICarouselAlign.start,
  onEndReached,
  initialNumToRender,
  isScrolling = false,
  ms = 2000,
  indexScroll,
  dotSize,
  activeDotColor,
  passiveDotColor,
  ...otherProps
}: ICarouselProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [currIndex, setCurrIndex] = useState<number>(0);

  const widthSnap = itemWidth + sideMargin * 2;
  const {width: WIDTH} = useSafeAreaFrame();

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
    waitForInteraction: true,
  }).current;

  const initScroll = useCallback(() => {
    const selectedIndex =
      indexScroll ||
      data.findIndex(item => keyExtractor(item) === activeItemId);

    if (selectedIndex > -1 && selectedIndex !== currIndex) {
      const widthData = widthSnap * selectedIndex;

      const emptySpace = WIDTH - widthSnap;
      setCurrIndex(selectedIndex);

      align === ICarouselAlign.center
        ? ref.current?.scrollToOffset({
            offset: widthData - emptySpace / 2,
            animated: false,
          })
        : ref.current?.scrollToIndex({
            index: selectedIndex,
            animated: false,
          });
    }
  }, [
    align,
    WIDTH,
    indexScroll,
    activeItemId,
    currIndex,
    data,
    keyExtractor,
    widthSnap,
  ]);

  const onPress = useCallback(
    (item: T) => () => {
      !loading && onPressItem && onPressItem(item);
    },
    [loading, onPressItem],
  );

  const renderItem = useCallback(
    ({item, index}: {item: T; index: number}) => {
      return (
        <TouchableOpacity
          onPress={onPress(item)}
          disabled={Boolean(!onPressItem || loading)}
          accessibilityLabel={LABELS.carouselItem}
          style={styles.item}>
          {sliderItem(item, index, data)}
        </TouchableOpacity>
      );
    },
    [data, onPress, onPressItem, loading, sliderItem],
  );
  const onScrollToIndexFailed = useCallback(
    (error: IError) => {
      if (averageItemLength) {
        ref.current?.scrollToOffset({
          offset: averageItemLength * error.index,
          animated: animateAutoScroll,
        });
      }
    },
    [averageItemLength, animateAutoScroll],
  );

  const visibleElementsCount = Math.floor(WIDTH / widthSnap);

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (align === ICarouselAlign.start) {
        const index = viewableItems[0]?.index;
        if (isNumber(index)) {
          setCurrIndex(index);
        }
        typeof onActiveChange === 'function' &&
          onActiveChange(viewableItems[0]?.item);
      } else {
        const length = viewableItems.length;
        const count = viewableItems[0]?.index === 0 ? length - 1 : length + 1;
        const currLength = visibleElementsCount > length ? count : length;
        const isEven = currLength % 2 === 0;

        const middleVisibleElement =
          isEven && viewableItems[0]?.index === 0
            ? Math.floor(currLength / 2) - 1
            : Math.floor(currLength / 2);

        const index = viewableItems[middleVisibleElement]?.index;

        if (isNumber(index)) {
          setCurrIndex(index);
        }

        typeof onActiveChange === 'function' &&
          onActiveChange(viewableItems[middleVisibleElement]?.item);
      }
    },
  ).current;

  useEffect(() => {
    if (!isScrolling) {
      return;
    }

    const timerAutoScroll = setInterval(() => {
      setCurrIndex(state => {
        ref.current?.scrollToIndex({
          animated: true,
          index: state + 1,
        });
        return state + 1;
      });
    }, ms);

    if (currIndex === data.length - 1) {
      clearInterval(timerAutoScroll);
    }

    return () => clearInterval(timerAutoScroll);
  }, [currIndex, data.length, isScrolling, ms]);

  const checkScroll = useCallback(
    ({contentOffset}: NativeScrollEvent, index: number) => {
      if (!contentOffset.x) {
        ref.current?.scrollToOffset({
          offset: widthSnap * index,
          animated: false,
        });
      }
    },
    [widthSnap],
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      indexScroll && checkScroll(event.nativeEvent, indexScroll);
    },
    [indexScroll, checkScroll],
  );

  return (
    <>
      <FlatList
        ref={ref}
        data={data}
        extraData={loading}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        onLayout={initScroll}
        accessibilityLabel={LABELS.carousel}
        snapToAlignment={align}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScrollToIndexFailed={onScrollToIndexFailed}
        snapToInterval={widthSnap}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        initialNumToRender={initialNumToRender || 10}
        {...otherProps}
      />
      {isDots && (
        <Dots
          length={data.length}
          activeDot={currIndex}
          animateAutoScroll={animateAutoScroll}
          fixedSize={dotSize}
          activeDotColor={activeDotColor}
          passiveDotColor={passiveDotColor}
        />
      )}
    </>
  );
};

export default Carousel;
