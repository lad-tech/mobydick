import {ViewStyle} from 'react-native';

export enum IStatusType {
  dot = 'dot',
  tag = 'tag',
}

export enum IStatusState {
  green = 'green',
  orange = 'orange',
  red = 'red',
  blue = 'blue',
  gray = 'gray',
}

export type IStatusProps =
  | {
      type: IStatusType.dot;
      state: IStatusState;
      style?: ViewStyle | ViewStyle[];
    }
  | {
      type: IStatusType.tag;
      state: IStatusState;
      text: string;
      style?: ViewStyle | ViewStyle[];
    };
