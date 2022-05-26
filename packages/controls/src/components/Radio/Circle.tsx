import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';

import {IRadioStyle} from './types';

const Circle: FC<IRadioStyle> = ({
  outerStyle,
  innerStyle,
  selected = false,
}) => <View style={outerStyle}>{selected && <View style={innerStyle} />}</View>;

export default Circle;
