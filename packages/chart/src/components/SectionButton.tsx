import {withTiming} from 'react-native-reanimated';
import {createStyles, Pressable, useStyles} from '@lad-tech/mobydick-core';

import {
  IChartTransition,
  IRenderSectionItem,
  ISharedGraphState,
} from '../types';

export interface ISectionButtonProps {
  renderSection: IRenderSectionItem;
  period: string;
  index: number;
  state: ISharedGraphState;
  transition: IChartTransition;
}

export const SectionButton = ({
  renderSection,
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
      {renderSection({period, state, transition}, index)}
    </Pressable>
  );
};

const createStyleFn = createStyles(() => ({
  flex: {
    flex: 1,
  },
}));

export default SectionButton;
