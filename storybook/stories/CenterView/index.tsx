import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {Button, IButtonTypes} from '@npm/mobydick-cta';
import {ThemeProvider, useStyles, useTheme} from '@npm/mobydick-styles';
import {PopupsProvider} from '@npm/mobydick-popups';

import styleCreate from './style';

const Wrapper: FC = ({children}) => {
  const {currentTheme, setCurrentTheme} = useTheme();
  const [styles] = useStyles(styleCreate);

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
    <ThemeProvider>
      <PopupsProvider>
        <Wrapper>{children}</Wrapper>
      </PopupsProvider>
    </ThemeProvider>
  );
}
