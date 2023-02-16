import {FunctionComponentElement} from 'react';
import {ViewStyle} from 'react-native';

import {IControlProps} from '../types';
import {IPressableProps} from '../../basic/components/Pressable/types';

export interface IControlsList {
  onChange(values: string[]): void;
  children: FunctionComponentElement<IControlProps & IPressableProps>[];
  horizontal?: boolean;
  single?: boolean;
  disabled?: boolean;
  values: string[];
  listStyles?: ViewStyle;
}
