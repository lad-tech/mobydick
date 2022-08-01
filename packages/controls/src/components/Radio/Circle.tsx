import React, {FC} from 'react';
import {Pressable, IPressableProps, View} from '@npm/mobydick-core';

import {IRadioStyle} from './types';

const Circle: FC<IRadioStyle & IPressableProps> = ({
  outerStyle,
  innerStyle,
  selected = false,
  ...rest
}) => {
  return (
    <Pressable style={outerStyle} {...rest}>
      {selected && <View style={innerStyle} />}
    </Pressable>
  );
};

export default Circle;
