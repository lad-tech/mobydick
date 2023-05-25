import {FlatListProps} from 'react-native/Libraries/Lists/FlatList';

export enum ICarouselAlign {
  center = 'center',
  start = 'start',
}

export interface ICarouselProps<T>
  extends Omit<FlatListProps<T>, 'renderItem' | 'keyExtractor'> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
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
  keyExtractor: (item: T, index?: number) => string;
}
