import {boolean, number, select, text} from '@storybook/addon-knobs';
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
  IUser,
  TouchableOpacity,
  useTheme,
  View,
} from '@npm/mobydick-core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageAvatar = require('./image/ImageAvatar.png');

const defaultUser = {
  firstName: 'Иван',
  lastName: 'Пушкин',
};
const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  ...defaultUser,
};
const userWithPhotoLocal = {
  logo: ImageAvatar,
  ...defaultUser,
};

const groupDateThree = [
  userWithPhotoLocal,
  userWithPhoto,
  defaultUser,
  {
    firstName: 'Ольга',
    middleName: 'Андреевна',
    lastName: 'Константинова',
  },
];

const groupDate = groupDateThree.concat(Array(8).fill(defaultUser));

const AvatarWithoutImage = ({user}: {user: IUser}) => {
  return (
    <Avatar
      user={user}
      size={select('size user icon', IAvatarSize, IAvatarSize.M)}
      type={IAvatarTypes.text}
    />
  );
};

const AvatarExample = () => {
  const {colors, spaces} = useTheme();
  const disabled = boolean('disabled', false);
  const plusNumber = number('plusNumber ', 88);

  return (
    <>
      <View style={{paddingVertical: spaces.Space8}}>
        <AvatarGroup groups={groupDate} />
      </View>
      <View style={{paddingVertical: spaces.Space8}}>
        <AvatarGroup
          groups={groupDateThree.concat(Array(plusNumber).fill(defaultUser))}
        />
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
      <TouchableOpacity
        style={{paddingVertical: spaces.Space8}}
        disabled={disabled}>
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
          disabled={disabled}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{paddingVertical: spaces.Space8}}
        disabled={disabled}>
        <Avatar
          user={defaultUser}
          type={IAvatarTypes.text}
          size={select('size user text', IAvatarSize, IAvatarSize.M)}
          badge={{
            type: IBadgeTypes.counter,
            value: select(
              'Counter types',
              ICounterTypes,
              ICounterTypes.attention,
            ),
            count: 5,
          }}
          disabled={disabled}
        />
      </TouchableOpacity>

      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={defaultUser}
          size={select('size user icon', IAvatarSize, IAvatarSize.M)}
          type={IAvatarTypes.icon}
          backgroundColor={colors.ElementAdditional}
        />
      </View>
      <View style={{flexDirection: 'row', paddingVertical: spaces.Space8}}>
        <AvatarWithoutImage
          user={{
            firstName: 'Константин',
            middleName: 'Андреевич',
            lastName: 'Константинов',
          }}
        />
        <AvatarWithoutImage
          user={{
            firstName: 'Ольга',
            middleName: 'Андреевна',
            lastName: 'Константинова',
          }}
        />
        <AvatarWithoutImage
          user={{
            firstName: text('firstName', 'Виктория'),
            middleName: text('middleName', 'Андреевна'),
            lastName: text('lastName', 'Лисина'),
          }}
        />
      </View>
    </>
  );
};

export default AvatarExample;
