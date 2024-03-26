import {StyleProp, View, ViewStyle} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import {createStyles, useStyles} from '@lad-tech/mobydick-core';

import {IDataset, IGraphState, IRenderSectionItem} from '../types';

import SectionButton from './SectionButton';

export interface ISelectionProps {
  state: SharedValue<IGraphState>;
  transition: SharedValue<number>;
  dataset: IDataset;
  renderSectionItem: IRenderSectionItem;
  sectionContainerStyles?: StyleProp<ViewStyle>;
}

export const Selection = ({
  state,
  transition,
  dataset,
  renderSectionItem,
  sectionContainerStyles,
}: ISelectionProps) => {
  const [styles] = useStyles(createStyleFn);

  const periods = Object.keys(dataset);

  return (
    <View style={[styles.container, sectionContainerStyles]}>
      {periods.map((period, index) => (
        <SectionButton
          renderSectionItem={renderSectionItem}
          key={index}
          index={index}
          period={period}
          state={state}
          transition={transition}
        />
      ))}
    </View>
  );
};

const createStyleFn = createStyles(({colors, spaces}) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'stretch',

    backgroundColor: colors.BgSecondary,

    borderRadius: spaces.Space16,
  },
}));

export default Selection;
