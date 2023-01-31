import {select} from '@storybook/addon-knobs';
import React from 'react';

import {Avatar, ISizeAvatar} from '@npm/mobydick-core';

const AvatarExample = () => {
  const userWithPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    name: 'Иван Пушкин',
  };
  const userWithoutPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/imagecs/30_55.jpg',
    name: 'Иван Пушкин',
  };

  return (
    <>
      <Avatar
        user={userWithPhoto}
        size={select('size', ISizeAvatar, ISizeAvatar.M)}
      />
      <Avatar
        user={userWithoutPhoto}
        size={select('size', ISizeAvatar, ISizeAvatar.M)}
      />
    </>
  );
};

export default AvatarExample;
