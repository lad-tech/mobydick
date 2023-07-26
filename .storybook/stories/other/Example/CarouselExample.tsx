import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';

import {rangeDataCarousel} from './components/RangeDataCarousel';
import SliderItem from './components/SliderItem';

import {
  Button,
  Carousel,
  IButtonSize,
  ICarouselAlign,
  LoopCarousel,
  rem,
  View,
} from '@lad-tech/mobydick-core';
import useStyles from '@lad-tech/mobydick-core/src/styles/theme/hooks/useStyles';

const CarouselExample = ({
  itemWidth,
  itemHeight,
  sideMargin,
  activeItemId,
  data,
  isDots,
  align,
  isLoop,
  animateAutoScroll,
}: {
  itemWidth: number;
  itemHeight: number;
  sideMargin: number;
  activeItemId: number;
  data: number;
  isDots: boolean;
  align: ICarouselAlign;
  isLoop: boolean;
  animateAutoScroll: boolean;
}) => {
  const [styles] = useStyles(stylesCreate);
  const [isOpen, setOpen] = useState(false);

  const keyExtractor = useCallback((item: number) => item.toString(), []);

  const sliderItem = useCallback(
    (item: number) => {
      return (
        <SliderItem
          item={item}
          width={rem(itemWidth)}
          height={rem(itemHeight)}
        />
      );
    },
    [itemWidth, itemHeight],
  );

  return (
    <View style={styles.container}>
      <Button
        text={'open/close carousel'}
        onPress={() => setOpen(!isOpen)}
        size={IButtonSize.large}
      />
      {isOpen &&
        (isLoop ? (
          <LoopCarousel
            data={rangeDataCarousel(1, data)}
            sliderItem={sliderItem}
            isDots={isDots}
            sideMargin={rem(sideMargin)}
            itemWidth={rem(itemWidth)}
            activeItemId={activeItemId.toString()}
            align={align}
          />
        ) : (
          <Carousel
            data={rangeDataCarousel(1, data)}
            sliderItem={sliderItem}
            keyExtractor={keyExtractor}
            animateAutoScroll={animateAutoScroll}
            isDots={isDots}
            sideMargin={rem(sideMargin)}
            itemWidth={rem(itemWidth)}
            activeItemId={activeItemId.toString()}
            align={align}
          />
        ))}
    </View>
  );
};

export default CarouselExample;

const stylesCreate = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
      aspectRatio: 2,
    },
  });
