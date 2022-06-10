import React from 'react';
import {View} from '@npm/mobydick-core';
import {Button, ITypes} from '@npm/mobydick-cta';
import {
  getCurrentTheme,
  setCurrentTheme,
  useStyles,
} from '@npm/mobydick-styles';

import styleCreate from './style';

export default function CenterView({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [styles] = useStyles(styleCreate);
  const currentTheme = getCurrentTheme();
  return (
    <View style={styles.main}>
      {children}
      <Button
        style={styles.themeSwitcher}
        type={ITypes.tertiary}
        text={currentTheme}
        onPress={() => {
          setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}
      />
    </View>
  );
}
