import React, {FC} from 'react';
import {Pressable, IPressableProps} from '@npm/mobydick-core';
import {Check, rem} from '@npm/mobydick-styles';

import {ICommonControlProps} from '../types';

const CheckSquare: FC<ICommonControlProps & IPressableProps> = ({
  selected,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      {selected ? <Check width={rem(20)} height={rem(20)} /> : null}
    </Pressable>
  );
};

export default CheckSquare;
