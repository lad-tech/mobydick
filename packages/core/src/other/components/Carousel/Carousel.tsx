import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, FlatList, ViewToken} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';
import Dots from '../Dots/Dots';
import View from '../../../basic/components/View/View';

import stylesCreate from './stylesCreate';
import {ICarouselAlign} from './types';
import EmptyFirstItem from './components/EmptyFirstItem';

const {width} = Dimensions.get('window');

interface IProps<T> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
  keyExtractor: (item: T) => string;
  sideMargin?: number;
  itemWidth: number;
  loading?: boolean;
  onPressItem?: (item: T) => void;
  activeItemId?: string;
  isDots?: boolean;
  averageItemLength?: number;
  animateAutoScroll?: boolean;
  onActiveChange?: (item: T) => void;
  align?: ICarouselAlign;
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
}: IProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const EMPTY_SPACE = width - itemWidth - sideMargin * 2;
  const EMPTY_SPACE_FIRST_ITEM = EMPTY_SPACE / 2;
  const EMPTY_SPACE_LAST_ITEM =
    align === ICarouselAlign.center ? EMPTY_SPACE_FIRST_ITEM : EMPTY_SPACE;
  const WIDTH_SNAP = itemWidth + sideMargin * 2;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 40,
    waitForInteraction: true,
  }).current;

  const initScroll = useCallback(() => {
    const selectedIndex = data.findIndex(
      item => keyExtractor(item) === activeItemId,
    );
    if (selectedIndex > -1 && selectedIndex !== slidePosition) {
      setSlidePosition(selectedIndex);
      ref.current?.scrollToOffset({
        offset: WIDTH_SNAP * selectedIndex,
        animated: animateAutoScroll,
      });
    }
  }, [
    activeItemId,
    slidePosition,
    data,
    keyExtractor,
    WIDTH_SNAP,
    animateAutoScroll,
  ]);

  const onLayout = useCallback(() => {
    activeItemId && initScroll();
  }, [initScroll, activeItemId]);

  const onPress = useCallback(
    item => () => {
      !loading && onPressItem && onPressItem(item);
    },
    [loading, onPressItem],
  );

  const keExtractorDefault = useCallback(
    item => keyExtractor(item),
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
    error => {
      if (averageItemLength) {
        ref.current?.scrollToOffset({
          offset: averageItemLength * error.index,
          animated: animateAutoScroll,
        });
      }
    },
    [averageItemLength, animateAutoScroll],
  );

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setSlidePosition(viewableItems[0]?.index || 0);
      typeof onActiveChange === 'function' &&
        onActiveChange(viewableItems[0]?.item);
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
        snapToInterval={WIDTH_SNAP}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <EmptyFirstItem align={align} width={EMPTY_SPACE_FIRST_ITEM} />
        }
        ListFooterComponent={<View style={{width: EMPTY_SPACE_LAST_ITEM}} />}
      />
      {isDots && <Dots length={data.length} activeDot={slidePosition} />}
    </>
  );
};

export default Carousel;
