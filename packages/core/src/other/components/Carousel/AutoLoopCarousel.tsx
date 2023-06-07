import React from 'react';

import {ICarouselProps} from './types';
import LoopCarousel from './LoopCarousel';

const AutoLoopCarousel = <T,>({
  ...otherProps
}: Omit<
  ICarouselProps<T>,
  'keyExtractor' | 'isDots' | 'animateAutoScroll'
>): JSX.Element => {
  return <LoopCarousel autoScroll={true} {...otherProps} />;
};

export default AutoLoopCarousel;
