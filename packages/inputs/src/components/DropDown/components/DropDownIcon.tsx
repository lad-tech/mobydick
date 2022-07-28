import React, {FC} from 'react';
import {SimpleIcon} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import {DropDownIconProps} from '../types';

const Icon: FC<DropDownIconProps> = props => {
  const {open, rightIcon} = props;
  return rightIcon ? (
    open ? (
      rightIcon
    ) : (
      <View style={{transform: [{rotateX: '180deg'}]}}>{rightIcon}</View>
    )
  ) : open ? (
    <SimpleIcon
      name={'icon-arrow-down'}
      style={{transform: [{rotateX: '180deg'}]}}
    />
  ) : (
    <SimpleIcon name={'icon-arrow-down'} />
  );
};

export default Icon;
