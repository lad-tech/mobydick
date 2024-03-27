import {BarChart, IRenderSectionItem, useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {mockChartDataset} from 'shared/lib/test/data/chart';
import RenderSectionItem from 'widgets/Chart/ui/RenderSectionItem';

const renderSectionItem: IRenderSectionItem = (
  {period, transition, state},
  index,
) => (
  <RenderSectionItem
    period={period}
    state={state}
    transition={transition}
    index={index}
  />
);

const BarChartScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <BarChart
        dataset={mockChartDataset}
        renderSectionItem={renderSectionItem}
      />
    </View>
  );
};

export default BarChartScreen;
