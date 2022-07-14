import React, {FC} from 'react';
import {PressableProps, View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import CheckSquare from './CheckSquare';
import {TCheckBox} from './types';

const CheckBox: FC<TCheckBox & PressableProps> = ({
  selected = false,
  disabled = false,
  children,
  ...rest
}) => {
  const [styles] = useStyles(stylesCreate, disabled, selected);

  return (
    <View style={styles.container}>
      <CheckSquare
        style={styles.checkbox}
        disabled={disabled}
        selected={selected}
        {...rest}
      />
      {children}
    </View>
  );
};

export default CheckBox;
