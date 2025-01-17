import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {TypographyProp} from '../../../../typography';

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
  neutral = 'neutral', // в дизайне его пока нет, но используется в btn с таким цветом
}

export interface ICounterProps {
  count?: number;
  font?: TypographyProp;
  type?: ICounterTypes;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: ICounterSize;
  maxLength?: number;
}
