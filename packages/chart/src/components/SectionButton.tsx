import {withTiming} from 'react-native-reanimated';
import {createStyles, Pressable, useStyles} from '@lad-tech/mobydick-core';

import {
  IChartTransition,
  IRenderSectionItem,
  ISharedChartState,
} from '../types';

export interface ISectionButtonProps {
  renderSectionItem: IRenderSectionItem;
  period: string;
  index: number;
  state: ISharedChartState;
  transition: IChartTransition;
}

export const SectionButton = ({
  renderSectionItem,
  transition,
  state,
  period,
  index,
}: ISectionButtonProps) => {
  const [styles] = useStyles(createStyleFn);

  return (
    <Pressable
      style={styles.flex}
      onPress={() => {
        state.value = {current: state.value.next, next: index};
        transition.value = 0;
        transition.value = withTiming(1, {
          duration: 750,
        });
      }}>
      {renderSectionItem({period, state, transition}, index)}
    </Pressable>
  );
};

const createStyleFn = createStyles(() => ({
  flex: {
    flexGrow: 1,
  },
}));

export default SectionButton;
