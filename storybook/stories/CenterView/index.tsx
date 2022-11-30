import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {Button, IButtonTypes} from '@npm/mobydick-cta';
import {ThemeProvider, useStyles, useTheme} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import stylesCreate from './stylesCreate';

const Wrapper: FC = ({children}) => {
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
