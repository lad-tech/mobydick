import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, FlatList, ViewToken} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';
import Dots from '../Dots/Dots';
import View from '../../../basic/components/View/View';

import stylesCreate from './stylesCreate';
import {ICarouselAlign, ICarouselProps} from './types';
import EmptyFirstItem from './components/EmptyFirstItem';

interface IError {
  index: number;
  highestMeasuredFrameIndex: number;
  averageItemLength: number;
}

const {width} = Dimensions.get('window');

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
}: ICarouselProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const emptySpace = width - itemWidth - sideMargin * 2;
  const emptySpaceFistItem = emptySpace / 2;
  const emptySpaceLastItem =
    align === ICarouselAlign.center ? emptySpaceFistItem : emptySpace;
  const widthSnap = itemWidth + sideMargin * 2;

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
    }
  }, [
    activeItemId,
    slidePosition,
    data,
    keyExtractor,
    widthSnap,
    animateAutoScroll,
  ]);

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
    (item: T) => keyExtractor(item),
    [keyExtractor],
  );

  const renderItem = useCallback(
    ({item, index}: {item: T; index: number}) => {
      return (
        <TouchableOpacity
          onPress={onPress(item)}
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

  const visibleElementsCount = Math.floor(width / widthSnap);

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
        data={data}
        extraData={loading}
        keyExtractor={keExtractorDefault}
        horizontal
        pagingEnabled
        onLayout={onLayout}
        accessibilityLabel={LABELS.carousel}
        snapToAlignment={ICarouselAlign.start}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScrollToIndexFailed={onScrollToIndexFailed}
        snapToInterval={widthSnap}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <EmptyFirstItem align={align} width={emptySpaceFistItem} />
        }
        ListFooterComponent={<View style={{width: emptySpaceLastItem}} />}
      />
      {isDots && <Dots length={data.length} activeDot={slidePosition} />}
    </>
  );
};

export default Carousel;
