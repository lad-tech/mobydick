import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import rem from '../../spaces/rem';
import Pressable from '../../../basic/components/Pressable/Pressable';
import FlatList from '../../../basic/components/FlatList/FlatList';

import SimpleIcon, {iconNames, SimpleIconName} from './SimpleIcon';

const SimpleIconAlbum = (props: {
  color?: string;
  onPress(item: SimpleIconName): void;
}): JSX.Element => {
  const renderItem = useCallback(({item}: {item: SimpleIconName}) => {
    return (
      <Pressable
        testID={item}
        style={styles.item}
        key={item}
        onPress={() => props.onPress(item)}>
        <SimpleIcon key={item} name={item} size={rem(20)} color={props.color} />
      </Pressable>
    );
  }, []);

  return <FlatList data={iconNames} renderItem={renderItem} numColumns={6} />;
};

const styles = StyleSheet.create({
  item: {
    padding: rem(10),
  },
});

export default SimpleIconAlbum;
