import React from 'react';
import {useWindowDimensions} from 'react-native';

import {Typography, useTheme, View} from '@npm/mobydick-core';

const SliderItem = ({
  item,
  width,
  height,
}: {
  item: number;
  width?: number;
  height?: number;
}) => {
  const {colors} = useTheme();
  const {width: WIDTH, height: HEIGHT} = useWindowDimensions();
  return (
    <View
      style={{
        width: width || WIDTH - 10,
        height: height || HEIGHT,
        backgroundColor: colors.ElementBase,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography font={'Medium-White-H4'}>{item}</Typography>
    </View>
  );
};

export default SliderItem;
