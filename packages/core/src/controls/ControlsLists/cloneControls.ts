import {cloneElement, FunctionComponentElement, useState} from 'react';

import {IControlProps} from '../types';
import {IPressableProps} from '../../basic/components/Pressable';

const cloneControls = (
  controls: FunctionComponentElement<IControlProps & IPressableProps>[],
  single = false,
  disabled = false,
  initialValues: string[] = [],
) => {
  const commonValues = new Set(initialValues);

  controls.forEach(item => {
    if (item.props.selected) {
      commonValues.add(item.props.value);
    }
  });

  const [values, setValues] = useState<string[]>(Array.from(commonValues));

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
          setValues(data);
        },
      });
    },
  );
  return {values, radios};
};

export default cloneControls;
