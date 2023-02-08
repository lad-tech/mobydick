import React, {FC, useCallback, useState} from 'react';
import {Image, ImageErrorEventData} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';

import {AvatarProps, ISizeAvatar, ITypeAvatar} from './types';
import stylesCreate from './stylesCreate';
import AvatarWithoutImage from './components/AvatarWithoutImage';

const Avatar: FC<AvatarProps> = props => {
  const {
    user,
    backgroundColor,
    size = ISizeAvatar.M,
    type = ITypeAvatar.icon,
  } = props;
  const [styles] = useStyles(stylesCreate, size, backgroundColor);

  const [error, setError] = useState<ImageErrorEventData>();

  const onError = useCallback(e => {
    setError(e.nativeEvent);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      {error ? (
        <AvatarWithoutImage
          size={size}
          firstName={user.firstName}
          lastName={user.lastName}
          type={type}
        />
      ) : (
        <Image
          source={{uri: user?.logo}}
          style={styles.image}
          onError={onError}
          accessibilityLabel={'imageAvatar'}
        />
      )}
    </View>
  );
};

export default Avatar;
