import React, {FC} from 'react';

import {ISizeAvatar, ITypeAvatar} from '../types';

import TextAvatar from './TextAvatar';
import IconAvatar from './IconAvatar';

interface IProps {
  size: ISizeAvatar;
  firstName: string;
  lastName?: string | undefined;
  type: ITypeAvatar;
}

const AvatarWithoutImage: FC<IProps> = props => {
  const {size, firstName, lastName, type} = props;
  switch (type) {
    case ITypeAvatar.text:
      return (
        <TextAvatar firstName={firstName} lastName={lastName} size={size} />
      );
    case ITypeAvatar.icon:
    default:
      return <IconAvatar size={size} />;
  }
};

export default AvatarWithoutImage;
