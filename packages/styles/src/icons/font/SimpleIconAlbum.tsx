import {Pressable, View} from '@npm/mobydick-core';
import React from 'react';
import {StyleSheet} from 'react-native';

import rem from '../../spaces/rem';

import SimpleIcon, {iconNames, SimpleIconName} from './SimpleIcon';

const SimpleIconAlbum = (props: {
  color?: string;
  onPress(item: SimpleIconName): void;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      {iconNames.map(item => (
        <Pressable
          testID={item}
          style={styles.item}
          key={item}
          onPress={() => props.onPress(item)}>
          <SimpleIcon
            key={item}
            name={item}
            size={rem(20)}
            color={props.color}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '70%',
    justifyContent: 'center',
  },
  item: {
    padding: rem(10),
  },
});

export default SimpleIconAlbum;
