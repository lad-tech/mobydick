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
} from '@lad-tech/mobydick-core';

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

const groupDateFour = [
  userWithPhotoLocal,
  userWithPhoto,
  defaultUser,
  {
    firstName: 'Ольга',
    middleName: 'Андреевна',
    lastName: 'Константинова',
  },
];

const groupDate = groupDateFour.concat(Array(8).fill(defaultUser));

const AvatarWithoutImage = ({
  user,
  sizeUserIcon,
}: {
  user: IUser;
  sizeUserIcon: IAvatarSize;
}) => {
  return <Avatar user={user} size={sizeUserIcon} type={IAvatarTypes.text} />;
};

const AvatarExample = ({
  disabled,
  groupCount,
  sizeUserIcon,
  sizeUserLogo,
  indicatorTypes,
  sizeUserText,
  sizeUserPhoto,
  counterTypes,
  firstName,
  middleName,
  lastName,
}: {
  disabled: boolean;
  groupCount: number;
  sizeUserIcon: IAvatarSize;
  sizeUserLogo: IAvatarSize;
  sizeUserText: IAvatarSize;
  sizeUserPhoto: IAvatarSize;
  indicatorTypes: IIndicatorTypes;
  counterTypes: ICounterTypes;
  firstName: string;
  middleName: string;
  lastName: string;
}) => {
  const {colors, spaces} = useTheme();

  return (
    <>
      <View style={{paddingVertical: spaces.Space8}}>
        <AvatarGroup groups={groupDate} />
      </View>

      <View style={{paddingVertical: spaces.Space8}}>
        <AvatarGroup
          groups={groupDateFour.slice(-groupCount)}
          groupCount={groupCount}
        />
      </View>
      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={userWithPhoto}
          size={sizeUserPhoto}
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
          size={sizeUserLogo}
          type={IAvatarTypes.icon}
          backgroundColor={colors.ElementAdditional}
          badge={{
            type: IBadgeTypes.indicator,
            value: indicatorTypes,
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
          size={sizeUserText}
          badge={{
            type: IBadgeTypes.counter,
            value: counterTypes,
            count: 5,
          }}
          disabled={disabled}
        />
      </TouchableOpacity>

      <View style={{paddingVertical: spaces.Space8}}>
        <Avatar
          user={defaultUser}
          size={sizeUserIcon}
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
          sizeUserIcon={sizeUserIcon}
        />
        <AvatarWithoutImage
          user={{
            firstName: 'Ольга',
            middleName: 'Андреевна',
            lastName: 'Константинова',
          }}
          sizeUserIcon={sizeUserIcon}
        />
        <AvatarWithoutImage
          user={{
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
          }}
          sizeUserIcon={sizeUserIcon}
        />
      </View>
    </>
  );
};

export default AvatarExample;
