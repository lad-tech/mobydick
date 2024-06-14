import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {PopupsProvider, ThemeProvider} from '@shared/ui';
import MainStack from '@pages/MainStack/ui';
import {PortalProvider} from '@lad-tech/mobydick-core';

export default () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider>
          <PortalProvider>
            <PopupsProvider>
              <MainStack />
            </PopupsProvider>
          </PortalProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
