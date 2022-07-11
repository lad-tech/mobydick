import React, {FC} from 'react';
import {Pressable, PressableProps, View} from '@npm/mobydick-core';

import {IRadioStyle} from './types';

const Circle: FC<IRadioStyle & PressableProps> = ({
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
