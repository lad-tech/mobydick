import {cloneElement, FunctionComponentElement, useState} from 'react';
import {IPressableProps} from '@npm/mobydick-core';

import {IControlProps} from '../types';

const cloneControls = (
  controls: FunctionComponentElement<IControlProps & IPressableProps>[],
  single = false,
  disabled = false,
) => {
  const initialValues = controls.reduce((acc: string[], item) => {
    if (item.props.selected && item.props.value) {
      acc.push(item.props.value);
    }
    return acc;
  }, []);

  const [values, setValues] = useState<string[]>(initialValues);

  const radios = controls.map(
    (radio: FunctionComponentElement<IControlProps & IPressableProps>) => {
      const value = radio.props.value;
      if (!value) return;

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
          setValues(data);
        },
      });
    },
  );
  return {values, radios};
};

export default cloneControls;
