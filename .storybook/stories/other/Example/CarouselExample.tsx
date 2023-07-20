import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {boolean, number, select} from '@storybook/addon-knobs';

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

const CarouselExample = () => {
  const [styles] = useStyles(stylesCreate);
  const [isOpen, setOpen] = useState(false);

  const itemWidth = number('itemWidth', 200);
  const itemHeight = number('itemHeight', 100);
  const sideMargin = number('sideMargin', 12);
  const activeItemId = number('activeItemId', 1);
  const data = number('length data', 10);
  const keyExtractor = useCallback((item: number) => item.toString(), []);
  const isDots = boolean('isDots', true);
  const align = select('align', ICarouselAlign, ICarouselAlign.start);
  const isLoop = boolean('isLoop', true);
  const animateAutoScroll = boolean('animateAutoScroll', true);

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
