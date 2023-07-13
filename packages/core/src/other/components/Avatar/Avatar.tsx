import React, {FC, useCallback, useMemo, useState} from 'react';
import {Image, ImageErrorEventData, NativeSyntheticEvent} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {LABELS} from '../../constants';
import useTheme from '../../../styles/theme/hooks/useTheme';
import {isNumber} from '../../functions/isNumber';

import {IAvatarProps, IAvatarSize, IAvatarTypes} from './types';
import stylesCreate from './stylesCreate';
import AvatarWithoutImage from './components/AvatarWithoutImage';
import AvatarBadge from './components/AvatarBadge';

const Avatar: FC<IAvatarProps> = props => {
  const {
    user,
    backgroundColor,
    size = IAvatarSize.M,
    type = IAvatarTypes.text,
    style,
    badge,
    disabled = false,
    border = false,
    headers,
  } = props;
  const {colors} = useTheme();

  const userColor = useMemo(() => {
    const nameLength = `${user?.firstName}${user?.middleName}${user?.lastName}`
      .length;
    const avatarColors = [
      colors.BannerFirst,
      colors.BannerSecond,
      colors.BannerThird,
      colors.BannerFourth,
      colors.BannerFifth,
      colors.BannerSixth,
      colors.BannerSeventh,
    ];
    return avatarColors[nameLength % avatarColors.length];
  }, [
    user,
    colors.BannerFirst,
    colors.BannerSecond,
    colors.BannerThird,
    colors.BannerFourth,
    colors.BannerFifth,
    colors.BannerSixth,
    colors.BannerSeventh,
  ]);

  const [styles] = useStyles(stylesCreate, size, border);

  const [error, setError] = useState<ImageErrorEventData>();

  const onError = useCallback(
    (e: NativeSyntheticEvent<ImageErrorEventData>) => {
      setError(e.nativeEvent);
    },
    [],
  );

  if (!user) {
    return null;
  }
  const isAvatarBadge = !!badge && !disabled && size === IAvatarSize.M;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor || userColor},
        style,
        {opacity: disabled ? 0.5 : 1},
      ]}>
      {isAvatarBadge && <AvatarBadge badge={badge} />}
      {error || !user.logo ? (
        <AvatarWithoutImage
          size={size}
          firstName={user.firstName}
          lastName={user.lastName}
          type={type}
        />
      ) : (
        <Image
          source={isNumber(user?.logo) ? user.logo : {uri: user?.logo, headers}}
          style={styles.image}
          onError={onError}
          accessibilityLabel={LABELS.imageAvatar}
        />
      )}
    </View>
  );
};

export default Avatar;
