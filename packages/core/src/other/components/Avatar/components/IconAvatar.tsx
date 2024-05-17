import {FC} from 'react';

import {IAvatarSize} from '../types';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useTheme from '../../../../styles/hooks/useTheme';
import px from '../../../../styles/utils/px';

interface IProps {
  size: IAvatarSize;
}

const getSizeIcon = (size: IAvatarSize) => {
  switch (size) {
    case IAvatarSize.S:
      return px(12);
    case IAvatarSize.L:
      return px(30);
    case IAvatarSize.XL:
      return px(40);
    case IAvatarSize.M:
    default:
      return px(20);
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
