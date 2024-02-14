import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';
import NavigationButton from 'shared/ui/NavigationButton';
import {SCREENS} from 'shared/lib/constants/screens';
import {move} from 'shared/lib/navigationRef';

const CoreScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton text={SCREENS.Chat} onPress={move(SCREENS.Chat)} />
      <NavigationButton
        text={SCREENS.Controls}
        onPress={move(SCREENS.Controls)}
      />
      <NavigationButton text={SCREENS.Inputs} onPress={move(SCREENS.Inputs)} />
      <NavigationButton text={SCREENS.Popups} onPress={move(SCREENS.Popups)} />
      <NavigationButton
        text={SCREENS.Progress}
        onPress={move(SCREENS.Progress)}
      />
      <NavigationButton text={SCREENS.Styles} onPress={move(SCREENS.Styles)} />
      <NavigationButton
        text={SCREENS.Typography}
        onPress={move(SCREENS.Typography)}
      />
    </View>
  );
};

export default CoreScreen;
