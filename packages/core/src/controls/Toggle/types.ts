import {IPressableProps} from '../../basic/components/Pressable/types';

export interface IToggle extends IPressableProps {
  active: boolean;
  disabled: boolean;
}
