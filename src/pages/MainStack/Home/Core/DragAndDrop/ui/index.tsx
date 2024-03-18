import {Dimensions} from 'react-native';

import DragAndDropList from '../../../../../../../packages/dragAndDrop/src/DragAndDrop/DragAndDropList';

import {
  createStyles,
  rem,
  Typography,
  useStyles,
  View,
} from '@lad-tech/mobydick-core';

const {width: WIDTH} = Dimensions.get('window');

const arr = new Array(25).fill('').map((_, i) => i);
export const MARGIN = rem(8);
export const COL = 1;
export const EL_WIDTH = WIDTH / COL - MARGIN * 2;
export const EL_HEIGHT = EL_WIDTH / 4;

const DragAndDropScreen = () => {
  const [styles] = useStyles(createStyleFn);

  return (
    <DragAndDropList
      list={arr}
      sideMargin={MARGIN}
      itemWidth={EL_WIDTH}
      itemHeight={EL_HEIGHT}
      columns={COL}
      renderItem={(item: number, index: number) => {
        return (
          <View style={styles.box} key={index} pointerEvents="none">
            <Typography style={styles.element}>{item}</Typography>
          </View>
        );
      }}
    />
  );
};

const createStyleFn = createStyles(({colors}) => ({
  box: {
    width: EL_WIDTH,
    height: EL_HEIGHT,
  },
  element: {
    backgroundColor: colors.BgAccent,
    flex: 1,
    marginVertical: MARGIN,
  },
}));

export default DragAndDropScreen;
