import {IPressableProps} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';

import ControlType from './constants';

export interface ICommonControlProps {
  selected?: boolean;
}

export interface IControlProps extends ICommonControlProps {
  value: string;
  disabled?: boolean;
  onPress?(): void;
  containerStyle?: ViewStyle;
}

export interface IControl extends IControlProps {
  type: ControlType;
}

export type TControl = IControl & IPressableProps;
