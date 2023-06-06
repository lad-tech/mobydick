import React from 'react';

import {ICarouselProps} from './types';
import LoopCarousel from './LoopCarousel';

const AutoLoopCarousel = <T,>({
  ...otherProps
}: Omit<ICarouselProps<T>, 'keyExtractor' | 'isDots'>): JSX.Element => {
  return <LoopCarousel autoScroll={true} isDots={false} {...otherProps} />;
};

export default AutoLoopCarousel;
