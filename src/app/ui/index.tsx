import {PopupsProvider, ThemeProvider} from 'shared/ui';
import MainStack from 'pages/MainStack/ui';

export default () => {
  return (
    <ThemeProvider>
      <PopupsProvider>
        <MainStack />
      </PopupsProvider>
    </ThemeProvider>
  );
};
