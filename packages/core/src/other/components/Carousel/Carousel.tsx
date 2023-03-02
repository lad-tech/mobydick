import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ViewToken} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';
import Dots from '../Dots/Dots';

import stylesCreate from './stylesCreate';

interface IProps<T> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
  keyExtractor: (item: T) => string;
  sideMargin?: number;
  loading?: boolean;
  onPressItem?: (item: T) => void;
  activeItemId?: string;
  isDots?: boolean; // на данный момент некорректно работает с activeItemId > 0
  averageItemLength?: number;
  animateAutoScroll?: boolean;
  onActiveChange?: (item: T) => void;
}

const Carousel = <T,>({
  data,
  sliderItem,
  keyExtractor,
  loading = false,
  sideMargin = rem(12),
  onPressItem,
  activeItemId,
  averageItemLength,
  animateAutoScroll = false,
  isDots = false,
  onActiveChange,
}: IProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 40,
    waitForInteraction: true,
  };

  const initScroll = useCallback(() => {
    const selectedIndex = data.findIndex(
      item => keyExtractor(item) === activeItemId,
    );
    if (selectedIndex > -1 && selectedIndex !== slidePosition) {
      setSlidePosition(selectedIndex);
      ref.current?.scrollToIndex({
        animated: animateAutoScroll,
        index: selectedIndex,
      });
    }
  }, [activeItemId, slidePosition, data, keyExtractor]);

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
    [averageItemLength],
  );
  const onViewableItemsChanged = (info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    info.viewableItems[0]?.index &&
      setSlidePosition(info.viewableItems[0].index);
    typeof onActiveChange === 'function' &&
      onActiveChange(info.viewableItems[0]?.item);
  };
  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

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
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onScrollToIndexFailed={onScrollToIndexFailed}
      />
      {isDots && <Dots length={data.length} activeDot={slidePosition} />}
    </>
  );
};

export default Carousel;
