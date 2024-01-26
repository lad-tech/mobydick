import {FC} from 'react';

import {Typography} from '../../../../typography';
import {IAvatarSize} from '../types';

interface IProps {
  size: IAvatarSize;
  firstName: string;
  lastName?: string | undefined;
}

const getFont = (size: IAvatarSize) => {
  switch (size) {
    case IAvatarSize.S:
      return 'Regular-White-XXXS';
    case IAvatarSize.L:
      return 'Regular-White-L';
    case IAvatarSize.XL:
      return 'Regular-White-H5';
    case IAvatarSize.M:
    default:
      return 'Regular-White-XS';
  }
};

const TextAvatar: FC<IProps> = ({firstName, lastName, size}) => {
  const firstLetter = firstName.slice(0, 1);
  const secondLetter = lastName?.slice(0, 1);
  const initials = secondLetter ? firstLetter + secondLetter : firstLetter;

  return <Typography font={getFont(size)}>{initials}</Typography>;
};

export default TextAvatar;
