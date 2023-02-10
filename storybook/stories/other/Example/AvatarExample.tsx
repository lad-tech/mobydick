import {select} from '@storybook/addon-knobs';
import React from 'react';

import {
  Avatar,
  AvatarGroup,
  IAvatarSize,
  IAvatarTypes,
  IBadgeTypes,
  ICounterTypes,
  IIndicatorTypes,
  IStatusTypes,
  TouchableOpacity,
  useTheme,
  View,
} from '@npm/mobydick-core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageAvatar = require('./image/ImageAvatar.png');

const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  firstName: 'Иван',
  lastName: 'Пушкин',
};
const userWithPhotoLocal = {
  logo: ImageAvatar,
  firstName: 'Иван',
  lastName: 'Пушкин',
};
const userWithoutPhoto = {
  firstName: 'Иван',
  lastName: 'Пушкин',
};
const userIcon = {
  firstName: 'Иван',
  lastName: 'Пушкин',
};

const groupDate = [
  {
    logo: ImageAvatar,
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
];
const AvatarExample = () => {
  const {colors, spaces} = useTheme();

  return (
    <>
      <View style={{paddingVertical: spaces.Space8}}>
        <AvatarGroup groups={groupDate} />
      </View>
      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithPhoto}
          size={select('size user photo', IAvatarSize, IAvatarSize.M)}
          type={IAvatarTypes.icon}
          badge={{
            type: IBadgeTypes.status,
            value: IStatusTypes.star,
          }}
        />
      </View>
      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithPhotoLocal}
          size={select('size user logo', IAvatarSize, IAvatarSize.M)}
          type={IAvatarTypes.icon}
          backgroundColor={colors.ElementAdditional}
          badge={{
            type: IBadgeTypes.indicator,
            value: select(
              'Indicator types',
              IIndicatorTypes,
              IIndicatorTypes.primary,
            ),
          }}
        />
      </View>
      <TouchableOpacity style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithoutPhoto}
          type={IAvatarTypes.text}
          size={select('size user text', IAvatarSize, IAvatarSize.M)}
          badge={{
            type: IBadgeTypes.counter,
            value: select(
              'Counter types',
              ICounterTypes,
              ICounterTypes.destructive,
            ),
            count: 5,
          }}
        />
      </TouchableOpacity>

      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userIcon}
          size={select('size user icon', IAvatarSize, IAvatarSize.M)}
          type={IAvatarTypes.icon}
          backgroundColor={colors.ElementAdditional}
        />
      </View>
    </>
  );
};

export default AvatarExample;
