import {move} from '@/shared/lib/navigationRef';
import {SCREENS} from '@/shared/lib/constants/screens';
import NavigationButton from '@/shared/ui/NavigationButton';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const HomeScreen = () => {
  return (
    <SafeAreaContainer>
      <NavigationButton onPress={move(SCREENS.Core)} text={SCREENS.Core} />
      <NavigationButton onPress={move(SCREENS.Chart)} text={SCREENS.Chart} />
      <NavigationButton
        onPress={move(SCREENS.Calendar)}
        text={SCREENS.Calendar}
      />
      <NavigationButton onPress={move(SCREENS.Utils)} text={SCREENS.Utils} />
      <NavigationButton
        onPress={move(SCREENS.KeyboardAware)}
        text={SCREENS.KeyboardAware}
      />
      <NavigationButton
        text={SCREENS.DragAndDrop}
        onPress={move(SCREENS.DragAndDrop)}
      />
      <NavigationButton
        text={SCREENS.Markdown}
        onPress={move(SCREENS.Markdown)}
      />
    </SafeAreaContainer>
  );
};

export default HomeScreen;
