import {forwardRef} from 'react';
import {FlatList as DefaultFlatList} from 'react-native';

import {FlatListProps, IFlatList} from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlatList = forwardRef<IFlatList, FlatListProps<any>>((props, ref) => {
  return <DefaultFlatList ref={ref} {...props} />;
});
export default FlatList;
