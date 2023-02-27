import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import rem from '../../../../styles/spaces/rem';
import {IThemeContext} from '../../../../styles';
import useStyles from '../../../../styles/theme/hooks/useStyles';

const THUMB_RADIUS_LOW = rem(12);
const THUMB_RADIUS_HIGH = rem(16);

const Thumb = ({name}: {name: string}) => {
  const [styles] = useStyles(stylesCreate);
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const stylesCreate = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    rootLow: {
      width: THUMB_RADIUS_LOW * 2,
      height: THUMB_RADIUS_LOW * 2,
      borderRadius: THUMB_RADIUS_LOW,
      borderWidth: spaces.Space2,
      borderColor: colors.IconMuted,
      backgroundColor: colors.BgPrimary,
    },
    rootHigh: {
      width: THUMB_RADIUS_HIGH * 2,
      height: THUMB_RADIUS_HIGH * 2,
      borderRadius: THUMB_RADIUS_HIGH,
      borderWidth: spaces.Space2,
      borderColor: colors.IconMuted,
      backgroundColor: colors.BgPrimary,
    },
  });
};

export default memo(Thumb);
