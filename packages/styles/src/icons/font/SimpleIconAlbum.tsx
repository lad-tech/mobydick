import {Pressable, View} from '@npm/mobydick-core';
import React from 'react';
import {StyleSheet} from 'react-native';

import SimpleIcon, {iconNames} from './SimpleIcon';

const SimpleIconAlbum = (props: {color?: string}): JSX.Element => {
  return (
    <View style={styles.container}>
      {iconNames.map(item => (
        <Pressable
          testID={item}
          style={styles.item}
          key={item}
          onPress={() => console.log(item)}>
          <SimpleIcon key={item} name={item} size={20} color={props.color} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '70%',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
  },
});

export default SimpleIconAlbum;
