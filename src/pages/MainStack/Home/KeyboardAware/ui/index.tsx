import {useStyles, View} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import NavigationButton from '@/shared/ui/NavigationButton';
import {SCREENS} from '@/shared/lib/constants/screens';
import {move} from '@/shared/lib/navigationRef';

const KeyboardAwareScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <NavigationButton
        text={SCREENS.KeyboardAwareScrollView}
        onPress={move(SCREENS.KeyboardAwareScrollView)}
      />
      <NavigationButton
        text={SCREENS.KeyboardAwareScrollViewWithBottom}
        onPress={move(SCREENS.KeyboardAwareScrollViewWithBottom)}
      />
      <NavigationButton
        text={SCREENS.KeyboardAwareScrollViewTabs}
        onPress={move(SCREENS.KeyboardAwareScrollViewTabs)}
      />
    </View>
  );
};

export default KeyboardAwareScreen;
