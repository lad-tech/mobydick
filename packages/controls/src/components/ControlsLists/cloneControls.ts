import {cloneElement, FunctionComponentElement, useState} from 'react';
import {IPressableProps} from '@npm/mobydick-core';

import {IControlProps} from '../types';

const cloneControls = (
  controls: FunctionComponentElement<IControlProps & IPressableProps>[],
  single = false,
  disabled = false,
) => {
  const initialValues = controls.reduce((acc: string[], item) => {
    if (item.props.selected) {
      acc.push(item.props.value);
    }
    return acc;
  }, []);
  const [values, setValues] = useState<string[]>(initialValues);
  const radios = controls.map(
    (radio: FunctionComponentElement<IControlProps & IPressableProps>) => {
      const text = radio.props.value;
      const selected = values.some(e => e === text);
      return cloneElement<IControlProps & IPressableProps>(radio, {
        key: text,
        selected,
        disabled,
        onPress: () => {
          let data = [...values];
          if (single) {
            data = [text];
          } else {
            if (selected) {
              data = data.filter(e => e !== text);
            } else {
              data = [...data, text];
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
