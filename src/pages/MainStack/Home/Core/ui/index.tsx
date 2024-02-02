import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import NavigationButton from 'shared/ui/NavigationButton';
import {SCREENS} from 'shared/lib/constants/screens';
import {move} from 'shared/lib/navigationRef';

const CoreScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton
        text={SCREENS.Typography}
        onPress={move(SCREENS.Typography)}
      />
      <NavigationButton
        text={SCREENS.Progress}
        onPress={move(SCREENS.Progress)}
      />
    </View>
  );
};

export default CoreScreen;
