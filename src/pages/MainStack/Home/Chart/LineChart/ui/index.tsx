import {
  IRenderHeader,
  IRenderSectionItem,
  LineChart,
  useStyles,
  View,
} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import {mockChartDataset} from '@shared/lib/test/data/chart';
import RenderSectionItem from '@widgets/Chart/ui/RenderSectionItem';
import RenderHeader from '@widgets/Chart/ui/RenderHeader';

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

const renderHeader: IRenderHeader = headerData => (
  <RenderHeader header={headerData} />
);

const LineChartScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <LineChart
        renderHeader={renderHeader}
        dataset={mockChartDataset}
        renderSectionItem={renderSectionItem}
      />
    </View>
  );
};

export default LineChartScreen;
