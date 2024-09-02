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
