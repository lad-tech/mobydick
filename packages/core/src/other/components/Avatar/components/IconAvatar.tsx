import React, {FC} from 'react';

import {ISizeAvatar} from '../types';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import rem from '../../../../styles/spaces/rem';

interface IProps {
  size?: ISizeAvatar;
}
const IconAvatar: FC<IProps> = ({size = ISizeAvatar.M}) => {
  const {colors} = useTheme();

  const getSizeIcon = () => {
    switch (size) {
      case ISizeAvatar.S:
        return rem(12);
      case ISizeAvatar.L:
        return rem(30);
      case ISizeAvatar.XL:
        return rem(40);
      case ISizeAvatar.M:
      default:
        return rem(20);
    }
  };
  return (
    <SimpleIcon
      name={'icon-account'}
      size={getSizeIcon()}
      color={colors.IconWhite}
    />
  );
};

export default IconAvatar;
