import {FunctionComponentElement} from 'react';
import {PressableProps} from '@npm/mobydick-core';

import {IControlProps} from '../types';

export interface IControlsList {
  onChange(values: string[]): void;
  children: FunctionComponentElement<IControlProps & PressableProps>[];
  horizontal?: boolean;
  single?: boolean;
}
