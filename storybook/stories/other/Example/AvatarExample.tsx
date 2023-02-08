import {select} from '@storybook/addon-knobs';
import React from 'react';

import {
  Avatar,
  ISizeAvatar,
  ITypeAvatar,
  TouchableOpacity,
  useTheme,
  View,
} from '@npm/mobydick-core';

const AvatarExample = () => {
  const {colors, spaces} = useTheme();

  const userWithPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  };
  const userWithoutPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/imagecs/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  };
  const userIcon = {
    logo: 'https://vraki.net/sites/default/files/inline/imagecs/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  };

  return (
    <>
      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithPhoto}
          size={select('size user 1', ISizeAvatar, ISizeAvatar.M)}
          type={ITypeAvatar.icon}
        />
      </View>
      <TouchableOpacity style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithoutPhoto}
          size={select('size user 2', ISizeAvatar, ISizeAvatar.M)}
        />
      </TouchableOpacity>

      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userIcon}
          size={select('size user 3', ISizeAvatar, ISizeAvatar.M)}
          type={ITypeAvatar.icon}
          backgroundColor={colors.ElementAdditional}
        />
      </View>
    </>
  );
};

export default AvatarExample;
