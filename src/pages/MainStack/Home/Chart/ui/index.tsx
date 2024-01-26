import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import NavigationButton from 'shared/ui/NavigationButton';
import {SCREENS} from 'shared/lib/constants/screens';
import {move} from 'shared/lib/navigationRef';

const ChartScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton
        text={SCREENS.LineChart}
        onPress={move(SCREENS.LineChart)}
      />
      <NavigationButton
        text={SCREENS.BarChart}
        onPress={move(SCREENS.BarChart)}
      />
    </View>
  );
};

export default ChartScreen;
