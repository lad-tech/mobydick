import {ReactElement, useCallback} from 'react';

import {ICarouselAlign, ICarouselProps} from './types';
import Carousel from './Carousel';

const LoopCarousel = <T,>({
  data,
  itemWidth,
  align = ICarouselAlign.start,
  ...otherProps
}: Omit<ICarouselProps<T>, 'keyExtractor'>): ReactElement => {
  const keyExtractorDefault = useCallback((item: T, index?: number) => {
    return String(index) + String(item);
  }, []);

  return (
    <Carousel
      data={[...data, ...data, ...data]}
      keyExtractor={keyExtractorDefault}
      itemWidth={itemWidth}
      initialNumToRender={data.length + 5}
      align={align}
      indexScroll={data.length}
      isLoop={true}
      {...otherProps}
    />
  );
};

export default LoopCarousel;
