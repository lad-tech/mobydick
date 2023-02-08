import React, {FC} from 'react';

import {Typography} from '../../../../typography';
import {ISizeAvatar} from '../types';

interface IProps {
  size: ISizeAvatar;
  firstName: string;
  lastName?: string | undefined;
}

const getFont = (size: ISizeAvatar) => {
  switch (size) {
    case ISizeAvatar.S:
      return 'Regular-White-XXXS';
    case ISizeAvatar.L:
      return 'Regular-White-L';
    case ISizeAvatar.XL:
      return 'Regular-White-H5';
    case ISizeAvatar.M:
    default:
      return 'Regular-White-XS';
  }
};

const TextAvatar: FC<IProps> = ({firstName, lastName, size}) => {
  const firstLetter = firstName[0];
  const secondLetter = lastName && lastName[0];
  const initials = secondLetter ? firstLetter + secondLetter : firstLetter;

  return <Typography font={getFont(size)}>{initials}</Typography>;
};

export default TextAvatar;
