import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useStyles, createStyles, View} from '@lad-tech/mobydick-core';

import {IDragAndDropListProps, IPositions} from './types';
import DragAndDrop from './DragAndDrop';

const DragAndDropList = <T,>({
  list,
  renderItem,
  itemWidth,
  itemHeight,
  columns,
  sideMargin,
}: IDragAndDropListProps<T>) => {
  const [styles] = useStyles(createStyleFn);
  const scrollY = useSharedValue(0);
  const scrollView = useAnimatedRef<Animated.ScrollView>();

  const positions = useSharedValue<IPositions>(
    Object.assign({}, ...list.map((_item: T, index) => ({[index]: index}))),
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y}}) => {
      scrollY.value = y;
    },
  });

  return (
    <View style={[styles.container]}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Animated.ScrollView
          onScroll={onScroll}
          ref={scrollView}
          contentContainerStyle={{
            height: Math.ceil(list.length / columns) * itemHeight,
            alignItems: 'center',
            marginHorizontal: sideMargin,
          }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}>
          {list.map((item, index) => {
            return (
              <DragAndDrop
                key={index}
                positions={positions}
                id={index}
                itemWidth={itemWidth}
                itemHeight={itemHeight}
                columns={columns}
                sideMargin={sideMargin}
                scrollView={scrollView}
                scrollY={scrollY}>
                {renderItem(item, index, list)}
              </DragAndDrop>
            );
          })}
        </Animated.ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

const createStyleFn = createStyles(() => ({
  container: {
    flex: 1,
  },
}));

export default DragAndDropList;
