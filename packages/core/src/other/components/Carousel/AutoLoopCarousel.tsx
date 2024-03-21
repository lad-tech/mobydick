import {ReactElement} from 'react';

import {ICarouselProps} from './types';
import LoopCarousel from './LoopCarousel';

const AutoLoopCarousel = <T,>({
  ...otherProps
}: Omit<
  ICarouselProps<T>,
  'keyExtractor' | 'isDots' | 'animateAutoScroll'
>): ReactElement => {
  return <LoopCarousel isScrolling={true} {...otherProps} />;
};

export default AutoLoopCarousel;
