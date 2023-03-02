import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';

import rem from '../../../styles/spaces/rem';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import useTheme from '../../../styles/theme/hooks/useTheme';
import {LABELS} from '../../constants';

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

const {width} = Dimensions.get('window');

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
  const {colors} = useTheme();
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

  const renderItem = ({item, index}: {item: T; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => !loading && onPressItem && onPressItem(item)}
        accessibilityLabel={LABELS.carouselItem}
        style={{
          marginHorizontal: sideMargin,
          width: width - sideMargin * 2,
          backgroundColor: colors.BgAccent,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {sliderItem(item, index, data)}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ref={ref}
      data={data}
      extraData={true}
      keyExtractor={item => keyExtractor(item)}
      horizontal
      pagingEnabled
      onLayout={onLayout}
      accessibilityLabel={LABELS.carousel}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      onScrollToIndexFailed={error => {
        if (averageItemLength) {
          ref.current?.scrollToOffset({
            offset: averageItemLength * error.index,
            animated: animateAutoScroll,
          });
        }
      }}
    />
  );
};

export default Carousel;
