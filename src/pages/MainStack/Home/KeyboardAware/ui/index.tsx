import NavigationButton from '@/shared/ui/NavigationButton';
import {SCREENS} from '@/shared/lib/constants/screens';
import {move} from '@/shared/lib/navigationRef';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const KeyboardAwareScreen = () => {
  return (
    <SafeAreaContainer>
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
    </SafeAreaContainer>
  );
};

export default KeyboardAwareScreen;
