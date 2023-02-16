import {cloneElement, FunctionComponentElement} from 'react';

import {IControlProps} from '../types';
import {IPressableProps} from '../../basic/components/Pressable';

import {IControlsList} from './types';

const useCloneControls = (
  controls: FunctionComponentElement<IControlProps & IPressableProps>[],
  values: string[],
  onChange: IControlsList['onChange'],
  single = false,
  disabled = false,
) => {
  const radios = controls.map(
    (radio: FunctionComponentElement<IControlProps & IPressableProps>) => {
      const value = radio.props.value;

      const selected = values.some(e => e === value);
      return cloneElement<IControlProps & IPressableProps>(radio, {
        key: value,
        selected,
        disabled,
        onPress: () => {
          let data = [...values];
          if (single) {
            data = [value];
          } else {
            if (selected) {
              data = data.filter(e => e !== value);
            } else {
              data = [...data, value];
            }
          }
          onChange(data);
        },
      });
    },
  );
  return {values, radios};
};

export default useCloneControls;
