import React, {FC} from 'react';
import {SimpleIcon, useTheme} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import {IDropDownIconProps} from '../types';

const Icon: FC<IDropDownIconProps> = props => {
  const {isOpen, rightIcon} = props;
  const {colors} = useTheme();
  return rightIcon ? (
    <View style={isOpen && {transform: [{rotateX: '180deg'}]}}>
      {rightIcon}
    </View>
  ) : (
    <SimpleIcon
      name={'icon-arrow-down'}
      color={colors.IconMuted}
      style={isOpen ? {transform: [{rotateX: '180deg'}]} : {}}
    />
  );
};

export default Icon;
