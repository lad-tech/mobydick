import {ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

import {IPressableProps} from '../basic/components/Pressable/types';

import ControlType from './constants';

export interface ICommonControlProps {
  selected?: boolean;
  fill?: string;
}

export interface IControlProps extends PropsWithChildren<ICommonControlProps> {
  value: string;
  disabled?: boolean;
  onPress?(): void;
  containerStyle?: ViewStyle;
  checkboxStyle?: ViewStyle;
}

export interface IControl extends IControlProps {
  type: ControlType;
}

export type TControl = IControl & IPressableProps;
