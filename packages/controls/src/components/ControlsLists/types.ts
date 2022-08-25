import {FunctionComponentElement} from 'react';
import {IPressableProps} from '@npm/mobydick-core';

import {IControlProps} from '../types';

export interface IControlsList {
  onChange(values: string[]): void;
  children: FunctionComponentElement<IControlProps & IPressableProps>[];
  horizontal?: boolean;
  single?: boolean;
  disabled?: boolean;
  initialValues?: string[];
}
