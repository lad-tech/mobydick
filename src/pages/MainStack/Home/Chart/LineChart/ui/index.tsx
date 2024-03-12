import {LineChart, useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {mockChartDataset} from 'shared/lib/test/data/chart';

const LineChartScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <LineChart dataset={mockChartDataset} />
    </View>
  );
};

export default LineChartScreen;
