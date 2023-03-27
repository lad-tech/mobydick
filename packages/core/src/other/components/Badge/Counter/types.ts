import {ViewStyle} from 'react-native';

export enum ICounterSize {
  medium = 'medium',
  small = 'small',
}

export enum ICounterTypes {
  accentLight = 'accentLight',
  accent = 'accent',
  mutedLight = 'mutedLight',
  attentionLight = 'attentionLight',

  attention = 'attention',
  muted = 'muted',
}

export interface ICounterProps {
  count?: number;
  type?: ICounterTypes;
  style?: ViewStyle | ViewStyle[];
  size?: ICounterSize;
  maxLength?: number;
}
