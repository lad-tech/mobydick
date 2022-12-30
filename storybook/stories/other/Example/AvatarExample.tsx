import {Avatar} from '@npm/mobydick-core';
import React from 'react';

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
      <Avatar user={userWithPhoto} />
      <Avatar user={userWithoutPhoto} />
    </>
  );
};

export default AvatarExample;
