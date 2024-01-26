import {BarChart, useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import {mockChartDataset} from 'shared/lib/test/data/chart';

const BarChartScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <BarChart dataset={mockChartDataset} />
    </View>
  );
};

export default BarChartScreen;
