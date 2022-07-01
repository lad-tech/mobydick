import React, {FC} from 'react';
import {ICommonControlProps} from '@npm/mobydick-controls';
import {Pressable, PressableProps} from '@npm/mobydick-core';
import {Check} from '@npm/mobydick-styles';

const CheckSquare: FC<ICommonControlProps & PressableProps> = ({
  selected,
  ...rest
}) => {
  return <Pressable {...rest}>{selected ? <Check /> : null}</Pressable>;
};

export default CheckSquare;
