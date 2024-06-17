import {useStyles, View} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import NavigationButton from '@shared/ui/NavigationButton';
import {SCREENS} from '@shared/lib/constants/screens';
import {move} from '@shared/lib/navigationRef';

const TypographyAllScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton
        text={SCREENS.TypographyLegacy}
        onPress={move(SCREENS.TypographyLegacy)}
      />
      <NavigationButton text={SCREENS.Title} onPress={move(SCREENS.Title)} />
      <NavigationButton
        text={SCREENS.Typography}
        onPress={move(SCREENS.Typography)}
      />
    </View>
  );
};

export default TypographyAllScreen;
