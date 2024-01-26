import {useCallback, useState} from 'react';

import {ICarouselAlign, ICarouselProps} from './types';
import Carousel from './Carousel';

const LoopCarousel = <T,>({
  data,
  itemWidth,
  align = ICarouselAlign.start,
  ...otherProps
}: Omit<ICarouselProps<T>, 'keyExtractor'>): JSX.Element => {
  const [infinityData, setInfinityData] = useState([...data, ...data, ...data]);
  const keyExtractorDefault = useCallback((item: T, index?: number) => {
    return String(index) + String(item);
  }, []);

  const onEndReached = useCallback(
    () => setInfinityData([...infinityData, ...data]),
    [data, infinityData],
  );

  return (
    <Carousel
      data={infinityData}
      keyExtractor={keyExtractorDefault}
      itemWidth={itemWidth}
      onEndReached={onEndReached}
      initialNumToRender={data.length + 5}
      align={align}
      indexScroll={data.length}
      {...otherProps}
    />
  );
};

export default LoopCarousel;
