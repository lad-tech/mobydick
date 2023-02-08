import React, {FC} from 'react';

import {ISizeAvatar} from '../types';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import rem from '../../../../styles/spaces/rem';

interface IProps {
  size: ISizeAvatar;
}

const getSizeIcon = (size: ISizeAvatar) => {
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

const IconAvatar: FC<IProps> = ({size}) => {
  const {colors} = useTheme();

  return (
    <SimpleIcon
      name={'icon-account'}
      size={getSizeIcon(size)}
      color={colors.IconWhite}
    />
  );
};

export default IconAvatar;
