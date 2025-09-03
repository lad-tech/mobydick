import NavigationButton from '@/shared/ui/NavigationButton';
import {SCREENS} from '@/shared/lib/constants/screens';
import {move} from '@/shared/lib/navigationRef';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const TypographyAllScreen = () => {
  return (
    <SafeAreaContainer>
      <NavigationButton
        text={SCREENS.TypographyLegacy}
        onPress={move(SCREENS.TypographyLegacy)}
      />
      <NavigationButton text={SCREENS.Title} onPress={move(SCREENS.Title)} />
      <NavigationButton
        text={SCREENS.Typography}
        onPress={move(SCREENS.Typography)}
      />
    </SafeAreaContainer>
  );
};

export default TypographyAllScreen;
