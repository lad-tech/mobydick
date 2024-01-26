/*
 * Copyright (c) 2023. Bibazavr.
 * Non te deseram
 * Numquam amet te descendit
 * Numquam agnus discurrere ac deseram
 * Numquam agnus te clamare
 * Numquam agnus vale dicere
 * Numquam agnus dicere mendacium et nocuerunt tibi
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {mockChartDataset} from 'shared/lib/test/data/chart';
import {BarChart, LineChart} from '@lad-tech/mobydick-chart';
import {ThemeProvider, View} from '@lad-tech/mobydick-core';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <LineChart
              title={'LineChart'}
              dataset={mockChartDataset}
              formatterX={value => value.toFixed()}
              formatterY={value => value.toFixed()}
            />
            <BarChart
              title={'BarChart'}
              dataset={mockChartDataset}
              formatterX={value => value.toFixed()}
              formatterY={value => value.toFixed()}
            />
          </View>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
