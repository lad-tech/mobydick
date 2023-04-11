import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';
import Dots from '../Dots/Dots';

import stylesCreate from './stylesCreate';
import {ICarouselAlign, ICarouselProps} from './types';

interface IError {
  index: number;
  highestMeasuredFrameIndex: number;
  averageItemLength: number;
}

const {width: WIDTH} = Dimensions.get('window');

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
  isLoop = false,
}: ICarouselProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [slidePosition, setSlidePosition] = useState<number>(0);
  const [infinityData, setInfinityData] = useState([...data, ...data, ...data]);

  const widthSnap = itemWidth + sideMargin * 2;
  const widthData = widthSnap * data.length;
  const emptySpace = WIDTH - widthSnap;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 60,
    waitForInteraction: true,
  }).current;

  const initScroll = useCallback(() => {
    const selectedIndex = data.findIndex(
      item => keyExtractor(item) === activeItemId,
    );
    if (selectedIndex > -1 && selectedIndex !== slidePosition) {
      setSlidePosition(selectedIndex);
      ref.current?.scrollToOffset({
        offset: widthSnap * selectedIndex,
        animated: animateAutoScroll,
      });
    } else if (isLoop) {
      ref.current?.scrollToOffset({
        offset:
          align === ICarouselAlign.center
            ? widthData - emptySpace / 2
            : widthData,
        animated: false,
      });
    }
  }, [
    activeItemId,
    slidePosition,
    data,
    keyExtractor,
    widthSnap,
    animateAutoScroll,
    isLoop,
  ]);

  const checkScroll = useCallback(
    ({contentOffset}: NativeScrollEvent) => {
      if (!contentOffset.x) {
        ref.current?.scrollToOffset({
          offset: widthSnap * data.length,
          animated: false,
        });
      }
    },
    [widthSnap, data.length],
  );

  const onLayout = useCallback(() => {
    activeItemId && initScroll();
  }, [initScroll, activeItemId]);

  const onPress = useCallback(
    (item: T) => () => {
      !loading && onPressItem && onPressItem(item);
    },
    [loading, onPressItem],
  );

  const keExtractorDefault = useCallback(
    (item: T, index: number) => {
      return isLoop ? String(index) : keyExtractor(item);
    },
    [keyExtractor, isLoop],
  );

  const renderItem = useCallback(
    ({item, index}: {item: T; index: number}) => {
      return (
        <TouchableOpacity
          onPress={onPress(item)}
          disabled={Boolean(onPress)}
          accessibilityLabel={LABELS.carouselItem}
          style={styles.item}>
          {sliderItem(item, index, data)}
        </TouchableOpacity>
      );
    },
    [data, onPress],
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
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      isLoop && checkScroll(event.nativeEvent);
    },
    [isLoop, checkScroll],
  );
  const onEndReached = useCallback(
    () => setInfinityData([...infinityData, ...data]),
    [data, infinityData],
  );
  const visibleElementsCount = Math.floor(WIDTH / widthSnap);

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (align === ICarouselAlign.start) {
        setSlidePosition(viewableItems[0]?.index || 0);
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

        setSlidePosition(viewableItems[middleVisibleElement]?.index || 0);
        typeof onActiveChange === 'function' &&
          onActiveChange(viewableItems[middleVisibleElement]?.item);
      }
    },
  ).current;

  return (
    <>
      <FlatList
        ref={ref}
        data={isLoop ? infinityData : data}
        extraData={loading}
        keyExtractor={keExtractorDefault}
        horizontal
        pagingEnabled
        onLayout={onLayout}
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
      />
      {isDots && <Dots length={data.length} activeDot={slidePosition} />}
    </>
  );
};

export default Carousel;
