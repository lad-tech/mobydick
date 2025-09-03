import {ScrollView, useTheme} from '@/shared/ui';
import NavigationButton from '@/shared/ui/NavigationButton';
import {SCREENS} from '@/shared/lib/constants/screens';
import {move} from '@/shared/lib/navigationRef';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const CoreScreen = () => {
  const {spaces} = useTheme();
  return (
    <SafeAreaContainer>
      <ScrollView contentContainerStyle={{gap: spaces.Space16}}>
        <NavigationButton text={SCREENS.Chat} onPress={move(SCREENS.Chat)} />
        <NavigationButton
          text={SCREENS.Controls}
          onPress={move(SCREENS.Controls)}
        />
        <NavigationButton text={SCREENS.CTA} onPress={move(SCREENS.CTA)} />
        <NavigationButton
          text={SCREENS.Inputs}
          onPress={move(SCREENS.Inputs)}
        />
        <NavigationButton
          text={SCREENS.Popups}
          onPress={move(SCREENS.Popups)}
        />
        <NavigationButton
          text={SCREENS.Progress}
          onPress={move(SCREENS.Progress)}
        />
        <NavigationButton
          text={SCREENS.Styles}
          onPress={move(SCREENS.Styles)}
        />
        <NavigationButton
          text={SCREENS.TypographyAll}
          onPress={move(SCREENS.TypographyAll)}
        />
        <NavigationButton text={SCREENS.Other} onPress={move(SCREENS.Other)} />
        <NavigationButton
          text={SCREENS.Navbars}
          onPress={move(SCREENS.Navbars)}
        />
        <NavigationButton
          text={SCREENS.Portals}
          onPress={move(SCREENS.Portals)}
        />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default CoreScreen;
