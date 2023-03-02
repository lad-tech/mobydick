import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import {Carousel, SimpleIcon, View} from '@npm/mobydick-core';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';

const data = [
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

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        sliderItem={sliderItem}
        keyExtractor={keyExtractor}
        animateAutoScroll={true}
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
