export enum ICarouselAlign {
  center = 'center',
  start = 'start',
}

export interface ICarouselProps<T> {
  data: Array<T>;
  sliderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
  keyExtractor: (item: T) => string;
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
  isLoop?: boolean;
}
