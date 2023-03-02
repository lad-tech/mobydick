import React, {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../constants';
import useStyles from '../../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';

interface IProps<T> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
  keyExtractor: (item: T) => string;
  sideMargin?: number;
  loading?: boolean;
  onPressItem?: (item: T) => void;
  activeItemId?: string;
  averageItemLength?: number;
  animateAutoScroll?: boolean;
}

const Carousel = <T,>({
  data = [],
  sliderItem,
  keyExtractor,
  loading = false,
  sideMargin = rem(12),
  onPressItem,
  activeItemId,
  averageItemLength,
  animateAutoScroll = false,
}: IProps<T>): JSX.Element => {
  const ref = useRef<FlatList>(null);
  const [styles] = useStyles(stylesCreate, sideMargin);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const initScroll = useCallback(() => {
    if (activeItemId) {
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
    }
  }, [activeItemId]);

  const onLayout = useCallback(() => {
    initScroll();
  }, [initScroll]);

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

  const onScrollToIndexFailed = useCallback(error => {
    if (averageItemLength) {
      ref.current?.scrollToOffset({
        offset: averageItemLength * error.index,
        animated: animateAutoScroll,
      });
    }
  }, []);

  return (
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
      onScrollToIndexFailed={onScrollToIndexFailed}
    />
  );
};

export default Carousel;
