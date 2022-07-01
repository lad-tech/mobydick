import React, {FC} from 'react';
import {Pressable, PressableProps} from '@npm/mobydick-core';
import {Check} from '@npm/mobydick-styles';

import {ICommonControlProps} from '../types';

const CheckSquare: FC<ICommonControlProps & PressableProps> = ({
  selected,
  ...rest
}) => {
  return <Pressable {...rest}>{selected ? <Check /> : null}</Pressable>;
};

export default CheckSquare;
