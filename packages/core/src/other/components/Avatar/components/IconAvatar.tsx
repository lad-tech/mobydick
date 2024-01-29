import {FC} from 'react';

import {IAvatarSize} from '../types';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useTheme from '../../../../styles/hooks/useTheme';
import rem from '../../../../styles/utils/rem';

interface IProps {
  size: IAvatarSize;
}

const getSizeIcon = (size: IAvatarSize) => {
  switch (size) {
    case IAvatarSize.S:
      return rem(12);
    case IAvatarSize.L:
      return rem(30);
    case IAvatarSize.XL:
      return rem(40);
    case IAvatarSize.M:
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
