import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import {move} from 'shared/lib/navigationRef';
import {SCREENS} from 'shared/lib/constants/screens';
import NavigationButton from 'shared/ui/NavigationButton';

const HomeScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton onPress={move(SCREENS.Core)} text={SCREENS.Core} />
      <NavigationButton onPress={move(SCREENS.Chart)} text={SCREENS.Chart} />
      <NavigationButton
        onPress={move(SCREENS.Calendar)}
        text={SCREENS.Calendar}
      />
      <NavigationButton onPress={move(SCREENS.Utils)} text={SCREENS.Utils} />
    </View>
  );
};

export default HomeScreen;
