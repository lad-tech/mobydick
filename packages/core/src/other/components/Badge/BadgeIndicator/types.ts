import {ViewStyle} from 'react-native';

export enum IIndicatorTypes {
  primary = 'primary',
  secondary = 'secondary',
}

export interface IBadgeIndicatorProps {
  style?: ViewStyle | ViewStyle[];
  type?: IIndicatorTypes;
}
