import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PopupsProvider, ThemeProvider} from '@shared/ui';
import MainStack from '@pages/MainStack/ui';

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PopupsProvider>
          <MainStack />
        </PopupsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
