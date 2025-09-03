import {Button, CurrentTheme, useTheme} from '@/shared/ui';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const SettingsScreen = () => {
  const {currentTheme, setCurrentTheme} = useTheme();

  return (
    <SafeAreaContainer>
      <Button
        text={currentTheme}
        disabled={false}
        onPress={() => {
          setCurrentTheme(
            currentTheme === CurrentTheme.light
              ? CurrentTheme.dark
              : CurrentTheme.light,
          );
        }}
      />
    </SafeAreaContainer>
  );
};

export default SettingsScreen;
