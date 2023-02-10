import React, {FC} from 'react';

import {IAvatarSize, IAvatarTypes} from '../types';

import TextAvatar from './TextAvatar';
import IconAvatar from './IconAvatar';

interface IProps {
  size: IAvatarSize;
  firstName: string;
  lastName?: string | undefined;
  type: IAvatarTypes;
}

const AvatarWithoutImage: FC<IProps> = props => {
  const {size, firstName, lastName, type} = props;
  switch (type) {
    case IAvatarTypes.text:
      return (
        <TextAvatar firstName={firstName} lastName={lastName} size={size} />
      );
    case IAvatarTypes.icon:
    default:
      return <IconAvatar size={size} />;
  }
};

export default AvatarWithoutImage;
