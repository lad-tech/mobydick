import React, {FC, useCallback, useState} from 'react';
import {Image, ImageErrorEventData} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';

import {AvatarProps, IAvatarSize, IAvatarTypes} from './types';
import stylesCreate from './stylesCreate';
import AvatarWithoutImage from './components/AvatarWithoutImage';
import {isNumber} from './functions/isNumber';
import AvatarBadge from './components/AvatarBadge';

const Avatar: FC<AvatarProps> = props => {
  const {
    user,
    backgroundColor,
    size = IAvatarSize.M,
    type = IAvatarTypes.icon,
    style,
    badge,
    disabled = false,
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
    <View style={[styles.container, style, {opacity: disabled ? 0.6 : 1}]}>
      {!!badge && <AvatarBadge badge={badge} />}
      {error || !user.logo ? (
        <AvatarWithoutImage
          size={size}
          firstName={user.firstName}
          lastName={user.lastName}
          type={type}
        />
      ) : (
        <Image
          source={isNumber(user?.logo) ? user.logo : {uri: user?.logo}}
          style={styles.image}
          onError={onError}
          accessibilityLabel={'imageAvatar'}
        />
      )}
    </View>
  );
};

export default Avatar;
