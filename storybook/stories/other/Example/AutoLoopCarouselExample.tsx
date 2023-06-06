import React, {useCallback} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {boolean, number, select} from '@storybook/addon-knobs';

import {
  AutoLoopCarousel,
  ICarouselAlign,
  rem,
  Typography,
  useTheme,
  View,
} from '@npm/mobydick-core';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';

function range(from: number, to: number) {
  const offset = from;
  const length = to - from + 1;

  if (length < 0) {
    return [];
  }

  return [...Array(length).keys()].map(value => value + offset);
}

const AutoLoopCarouselExample = () => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const {width: WIDTH, height: HEIGHT} = useWindowDimensions();

  const sideMargin = number('sideMargin', 5);
  const activeItemId = number('activeItemId', 1);
  const data = number('length data', 3);
  const align = select('align', ICarouselAlign, ICarouselAlign.start);
  const timerAuto = number('timerAuto', 2000);

  const sliderItem = useCallback((item: number) => {
    return (
      <View
        style={{
          width: WIDTH - 10,
          height: HEIGHT,
          backgroundColor: colors.ElementBase,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography font={'Medium-White-H4'}>{item}</Typography>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <AutoLoopCarousel
        data={range(1, data)}
        sliderItem={sliderItem}
        animateAutoScroll={boolean('animateAutoScroll', true)}
        sideMargin={rem(sideMargin)}
        itemWidth={WIDTH - 10}
        activeItemId={activeItemId.toString()}
        align={align}
        timerAuto={timerAuto}
      />
    </View>
  );
};

const stylesCreate = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  });

export default AutoLoopCarouselExample;
