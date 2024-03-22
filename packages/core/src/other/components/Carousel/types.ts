import {FlatListProps} from 'react-native/Libraries/Lists/FlatList';
import {ViewStyle} from 'react-native';
import {ReactElement} from 'react';

export enum ICarouselAlign {
  center = 'center',
  start = 'start',
}

export interface ICarouselProps<T>
  extends Omit<FlatListProps<T>, 'renderItem' | 'keyExtractor'> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => ReactElement;
  keyExtractor: (item: T, index?: number) => string;
  itemWidth: number;
  sideMargin?: number;
  loading?: boolean;
  onPressItem?: (item: T) => void;
  activeItemId?: string;
  isDots?: boolean;
  averageItemLength?: number;
  animateAutoScroll?: boolean;
  onActiveChange?: (item: T) => void;
  align?: ICarouselAlign;
  isScrolling?: boolean;
  ms?: number;
  indexScroll?: number;
  dotSize?: number;
  activeDotColor?: string;
  passiveDotColor?: string;
  dotsStyles?: ViewStyle | ViewStyle[];
}
