import {Image, ImageErrorEventData} from 'react-native';
import React, {FC, useCallback, useState} from 'react';

import {Typography} from '../../../typography';
import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';

import {AvatarProps, ISizeAvatar} from './types';
import stylesCreate from './stylesCreate';

const Avatar: FC<AvatarProps> = props => {
  const {user, size = ISizeAvatar.M} = props;

  const [styles] = useStyles(stylesCreate, size);
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
        <Typography font={'Regular-White-H5'}>{user?.name[0]}</Typography>
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
