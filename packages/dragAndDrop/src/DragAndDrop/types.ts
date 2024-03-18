import Animated, {AnimatedRef, SharedValue} from 'react-native-reanimated';

export type IContextType = {
  x: number;
  y: number;
};

export interface IPositions {
  [id: string]: number;
}

interface IView {
  sideMargin: number;
  itemWidth: number;
  itemHeight: number;
  columns: number;
}
export interface IDragAndDropListProps<T> extends IView {
  list: T[];
  renderItem: (item: T, index: number, data: Array<T>) => JSX.Element;
}

export interface IDragAndDropProps extends IView {
  positions: SharedValue<IPositions>;
  id: number;
  scrollY: Animated.SharedValue<number>;
  scrollView: AnimatedRef<Animated.ScrollView>;
}
