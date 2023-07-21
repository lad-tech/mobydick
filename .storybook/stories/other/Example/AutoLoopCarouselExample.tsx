import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import {rangeDataCarousel} from './components/RangeDataCarousel';
import SliderItem from './components/SliderItem';

import {
  AutoLoopCarousel,
  ICarouselAlign,
  rem,
  View,
} from '@lad-tech/mobydick-core';
import useStyles from '@lad-tech/mobydick-core/src/styles/theme/hooks/useStyles';

const AutoLoopCarouselExample = ({
  sideMargin,
  activeItemId,
  dataLength,
  align,
  timerAuto,
  itemWidth,
  itemHeight,
}: {
  sideMargin: number;
  activeItemId: number;
  dataLength: number;
  isDots: boolean;
  align: ICarouselAlign;
  timerAuto: number;
  itemWidth: number;
  itemHeight: number;
}) => {
  const [styles] = useStyles(stylesCreate);

  const sliderItem = useCallback(
    (item: number) => {
      return <SliderItem item={item} width={itemWidth} height={itemHeight} />;
    },
    [itemWidth, itemHeight],
  );

  return (
    <View style={styles.container}>
      <AutoLoopCarousel
        data={rangeDataCarousel(1, dataLength)}
        sliderItem={sliderItem}
        sideMargin={rem(sideMargin)}
        itemWidth={itemWidth}
        activeItemId={activeItemId.toString()}
        align={align}
        ms={timerAuto}
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
