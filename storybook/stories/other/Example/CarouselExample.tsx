import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

import {Carousel, SimpleIcon, SimpleIconName, View} from '@npm/mobydick-core';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';

interface IData {
  name: SimpleIconName;
  id: string;
}
const data: IData[] = [
  {name: 'icon-star', id: '0'},
  {name: 'icon-account', id: '1'},
  {name: 'icon-calendar', id: '2'},
  {name: 'icon-camera', id: '3'},
  {name: 'icon-check', id: '4'},
  {name: 'icon-arrow-left-long', id: '5'},
  {name: 'icon-arrow-right-long', id: '6'},
  {name: 'icon-bookmark', id: '7'},
  {name: 'icon-copy', id: '8'},
  {name: 'icon-edit', id: '9'},
  {name: 'icon-heart', id: '10'},
];

const CarouselExample = () => {
  const [styles] = useStyles(stylesCreate);

  const sliderItem = useCallback(item => <SimpleIcon name={item.name} />, []);
  const keyExtractor = useCallback(item => item.id, []);
  const isDots = boolean('isDots', true);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        sliderItem={sliderItem}
        keyExtractor={keyExtractor}
        animateAutoScroll={true}
        isDots={isDots}
        activeItemId={3}
      />
    </View>
  );
};

export default CarouselExample;

const stylesCreate = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      aspectRatio: 2,
    },
  });
