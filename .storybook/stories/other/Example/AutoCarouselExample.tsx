import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import {rangeDataCarousel} from './components/RangeDataCarousel';
import SliderItem from './components/SliderItem';

import {AutoCarousel, ICarouselAlign, rem, View} from '@lad-tech/mobydick-core';
import useStyles from '@lad-tech/mobydick-core/src/styles/theme/hooks/useStyles';

const AutoCarouselExample = ({
  sideMargin,
  activeItemId,
  dataLength,
  isDots,
  align,
  timerAuto,
  itemWidth,
  itemHeight,
  animateAutoScroll,
}: {
  sideMargin: number;
  activeItemId: number;
  dataLength: number;
  isDots: boolean;
  align: ICarouselAlign;
  timerAuto: number;
  itemWidth: number;
  itemHeight: number;
  animateAutoScroll: boolean;
}) => {
  const [styles] = useStyles(stylesCreate);

  const keyExtractor = useCallback((item: number) => item.toString(), []);

  const sliderItem = useCallback(
    (item: number) => {
      return <SliderItem item={item} width={itemWidth} height={itemHeight} />;
    },
    [itemWidth, itemHeight],
  );

  return (
    <View style={styles.container}>
      <AutoCarousel
        data={rangeDataCarousel(1, dataLength)}
        sliderItem={sliderItem}
        keyExtractor={keyExtractor}
        animateAutoScroll={animateAutoScroll}
        isDots={isDots}
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

export default AutoCarouselExample;
