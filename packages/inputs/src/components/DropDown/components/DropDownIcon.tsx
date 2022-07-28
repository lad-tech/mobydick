import React, {FC} from 'react';
import {SimpleIcon} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import {DropDownIconProps} from '../types';

const Icon: FC<DropDownIconProps> = props => {
  const {isOpen, rightIcon} = props;
  return rightIcon ? (
    <View style={isOpen && {transform: [{rotateX: '180deg'}]}}>
      {rightIcon}
    </View>
  ) : (
    <SimpleIcon
      name={'icon-arrow-down'}
      style={isOpen ? {transform: [{rotateX: '180deg'}]} : {}}
    />
  );
};

export default Icon;
