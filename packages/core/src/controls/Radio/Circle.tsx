import React, {FC} from 'react';

import {IPressableProps} from '../../basic';
import Pressable from '../../basic/components/Pressable/Pressable';
import View from '../../basic/components/View/View';

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
