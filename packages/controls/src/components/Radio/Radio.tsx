import React, {FC} from 'react';
import {Pressable, PressableProps, Text} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IControlProps} from '../types';

import stylesCreate from './stylesCreate';
import Circle from './Circle';

const Radio: FC<IControlProps & PressableProps> = ({
  text,
  selected = false,
  disabled = false,
  ...rest
}) => {
  const [styles] = useStyles(stylesCreate, selected, disabled);

  return (
    <Pressable style={styles.container} disabled={disabled} {...rest}>
      <Circle
        selected={selected}
        outerStyle={styles.circle}
        innerStyle={styles.innerCircle}
      />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Radio;
