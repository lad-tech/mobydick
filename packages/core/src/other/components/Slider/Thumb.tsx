import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import rem from '../../../styles/spaces/rem';

const THUMB_RADIUS_LOW = rem(12);
const THUMB_RADIUS_HIGH = rem(16);

const Thumb = ({name}: {name: string}) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: rem(2),
    borderColor: '#7f7f7f',
    backgroundColor: '#aaaaaa',
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: rem(2),
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);
