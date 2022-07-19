import {IPressableProps} from '@npm/mobydick-core';

export interface IToggle extends IPressableProps {
  active: boolean;
  disabled: boolean;
}
