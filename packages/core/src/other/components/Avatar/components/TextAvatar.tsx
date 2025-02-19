import {FC} from 'react';

import {Title, Typography} from '../../../../typography';
import {IAvatarSize} from '../types';

interface IProps {
  size: IAvatarSize;
  firstName: string;
  lastName?: string | undefined;
}

const getFont = (size: IAvatarSize) => {
  switch (size) {
    case IAvatarSize.S:
      return 'Regular-White-XXS';
    case IAvatarSize.L:
      return 'Regular-White-L';
    case IAvatarSize.M:
    default:
      return 'Regular-White-S';
  }
};

const TextAvatar: FC<IProps> = ({firstName, lastName, size}) => {
  const firstLetter = firstName.slice(0, 1);
  const secondLetter = lastName?.slice(0, 1);
  const initials = secondLetter ? firstLetter + secondLetter : firstLetter;

  if (size == IAvatarSize.XL) {
    return <Title font={'White-H5'}>{initials}</Title>;
  }

  return <Typography font={getFont(size)}>{initials}</Typography>;
};

export default TextAvatar;
