import {Avatar} from '@npm/mobydick-core';
import React from 'react';

const ExampleAvatar = () => {
  const senderPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    name: 'Иван Пушкин',
  };
  const senderNotPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/imagecs/30_55.jpg',
    name: 'Иван Пушкин',
  };

  return (
    <>
      <Avatar sender={senderPhoto} />
      <Avatar sender={senderNotPhoto} />
    </>
  );
};

export default ExampleAvatar;
