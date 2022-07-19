import {PressableProps} from '@npm/mobydick-core';

export interface IToggle extends PressableProps {
  active: boolean;
  disabled: boolean;
}
