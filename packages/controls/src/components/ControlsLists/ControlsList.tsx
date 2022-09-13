import React, {FC, useEffect} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IControlsList} from './types';
import cloneControls from './cloneControls';
import stylesCreate from './stylesCreate';

const ControlsList: FC<IControlsList> = ({
  single = false,
  horizontal = false,
  onChange,
  disabled = false,
  children,
  initialValues,
  listStyles,
}) => {
  const {values, radios} = cloneControls(
    children,
    single,
    disabled,
    initialValues,
  );
  const [styles] = useStyles(stylesCreate, horizontal);

  useEffect(() => {
    onChange(values);
  }, [values]);

  return <View style={[styles.list, listStyles]}>{radios}</View>;
};

export default ControlsList;
