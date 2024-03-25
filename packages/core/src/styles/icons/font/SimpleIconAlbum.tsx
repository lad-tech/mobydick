import {FlatListProps, StyleSheet} from 'react-native';

import rem from '../../utils/rem';
import Pressable from '../../../basic/components/Pressable/Pressable';
import FlatList from '../../../basic/components/FlatList/FlatList';

import SimpleIcon, {iconNames, SimpleIconName} from './SimpleIcon';

const renderItem =
  (onPress: (name: SimpleIconName) => void, color?: string) =>
  ({item}: {item: SimpleIconName}) => {
    return (
      <Pressable
        testID={item}
        style={styles.item}
        key={item}
        onPress={() => onPress(item)}>
        <SimpleIcon key={item} name={item} size={rem(20)} color={color} />
      </Pressable>
    );
  };

const keyExtractor: FlatListProps<SimpleIconName>['keyExtractor'] = item =>
  item;

const SimpleIconAlbum = ({
  color,
  onPress,
  numColumns = 9,
  ...rest
}: {
  color?: string;
  onPress(item: SimpleIconName): void;
} & Omit<FlatListProps<SimpleIconName>, 'data' | 'renderItem'>) => {
  return (
    <FlatList
      {...rest}
      numColumns={numColumns}
      data={iconNames}
      renderItem={renderItem(onPress, color)}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: rem(10),
  },
});

export default SimpleIconAlbum;
