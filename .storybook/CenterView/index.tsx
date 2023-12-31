import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import stylesCreate from './stylesCreate';

import {
  View,
  Button,
  IButtonTypes,
  ThemeProvider,
  useStyles,
  useTheme,
  PopupsProvider,
} from '@lad-tech/mobydick-core';

const Wrapper: FC<PropsWithChildren<unknown>> = ({children}) => {
  const {currentTheme, setCurrentTheme} = useTheme();
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.main}>
      {children}
      <Button
        style={styles.themeSwitcher}
        type={IButtonTypes.tertiary}
        text={currentTheme}
        onPress={() => {
          setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}
      />
    </View>
  );
};
export default function CenterView({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PopupsProvider>
          <Wrapper>{children}</Wrapper>
        </PopupsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
