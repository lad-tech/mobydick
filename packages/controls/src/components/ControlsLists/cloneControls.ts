import {cloneElement, FunctionComponentElement, useState} from 'react';
import {PressableProps} from '@npm/mobydick-core';

import {IControlProps} from '../types';

const cloneControls = (
  controls: FunctionComponentElement<IControlProps & PressableProps>[],
  single = false,
) => {
  const initialValues = controls
    .filter(control => control.props.selected)
    .map(control => control.props.value);
  const [values, setValues] = useState<string[]>(initialValues);
  const radios = controls.map(
    (radio: FunctionComponentElement<IControlProps & PressableProps>) => {
      const text = radio.props.value;
      const selected = values.some(e => e === text);
      return cloneElement<IControlProps & PressableProps>(radio, {
        key: text,
        selected,
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
