import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useFonts} from 'expo-font';
import {SplashScreen} from 'expo-router';
import {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Appearance, Platform} from 'react-native';

import {PopupsProvider, ThemeProvider} from '@/shared/ui';
import MainStack from '@/pages/MainStack/ui';
import {PortalProvider} from '@lad-tech/mobydick-core';
import {useNavigationTheme} from '@/shared/lib/hooks/useNavigationTheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const NavigationThemeWrapper = () => {
  const theme = useNavigationTheme();

  useEffect(() => {
    if (Platform.OS !== 'web')
      Appearance.setColorScheme(theme.dark ? 'dark' : 'light');
  }, [theme.dark]);

  return (
    <>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <MainStack />
    </>
  );
};

export default () => {
  const [loaded] = useFonts({
    Inter: require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter.ttf'),
    Neotis: require('@lad-tech/mobydick-core/src/styles/icons/font/assets/fonts/Neotis.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider>
          <PortalProvider>
            <PopupsProvider>
              <NavigationThemeWrapper />
            </PopupsProvider>
          </PortalProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
