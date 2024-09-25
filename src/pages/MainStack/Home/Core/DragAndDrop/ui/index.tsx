import {Dimensions} from 'react-native';

import {DragAndDropList, px, useTheme} from '@/shared/ui';
import {BlockView} from '@/shared/ui/BlockView';

const {width: WIDTH} = Dimensions.get('window');

const arr = new Array(26).fill('').map((_, i) => i);
export const MARGIN = px(8);
export const COL = 2;
export const EL_WIDTH = WIDTH / COL - MARGIN;
export const EL_HEIGHT = EL_WIDTH / 2;

const DragAndDropScreen = () => {
  const {colors} = useTheme();

  const bgColors = [
    colors.ElementMuted,
    colors.ElementAdditional,
    colors.ElementAttention,
    colors.ElementBase,
    colors.ElementNeutral,
    colors.ElementSuccess,
    colors.ElementWhite,
  ];

  return (
    <DragAndDropList
      list={arr}
      itemWidth={EL_WIDTH}
      itemHeight={EL_HEIGHT}
      columns={COL}
      contentContainerStyle={{marginHorizontal: MARGIN}}
      renderItem={(item: number, index: number) => (
        <BlockView
          item={item}
          width={EL_WIDTH}
          key={index}
          height={EL_HEIGHT}
          backgroundColor={
            bgColors[Math.floor(Math.random() * bgColors.length)]
          }
        />
      )}
    />
  );
};

export default DragAndDropScreen;
