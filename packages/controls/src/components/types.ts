import {IPressableProps} from '@npm/mobydick-core';

import ControlType from './constants';

export interface ICommonControlProps {
  selected?: boolean;
}

export interface IControlProps extends ICommonControlProps {
  value: string;
  disabled?: boolean;
  onPress?(): void;
}

export interface IControl extends IControlProps {
  type: ControlType;
  value: string;
}

export type TControl = IControl & IPressableProps;
