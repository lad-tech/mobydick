import Animated, {AnimatedRef, SharedValue} from 'react-native-reanimated';
import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';

export interface IPositions {
  [id: string]: number;
}

interface IView {
  itemWidth: number;
  itemHeight: number;
  columns: number;
}
export interface IDragAndDropListProps<T> extends IView {
  list: T[];
  renderItem: (item: T, index: number, data: Array<T>) => ReactElement;
  contentContainerStyle?: ViewStyle | ViewStyle[];
}

export interface IDragAndDropProps extends IView {
  positions: SharedValue<IPositions>;
  id: number;
  scrollY: SharedValue<number>;
  scrollView: AnimatedRef<Animated.ScrollView>;
  heightScrollView: number;
}
