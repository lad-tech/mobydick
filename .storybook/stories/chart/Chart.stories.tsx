import React from 'react';
import {Meta, StoryObj} from '@storybook/react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {mockChartDataset} from '../../../src/chart';

import {View} from '@lad-tech/mobydick-core';
import {LineChart} from '@lad-tech/mobydick-chart';

const LineChartExample = () => {
  return (
    <View>
      <LineChart dataset={mockChartDataset} />
    </View>
  );
};

const meta: Meta<typeof LineChartExample> = {
  title: 'Chart',
  component: LineChartExample,
  decorators: [
    Story => (
      <SafeAreaProvider>
        <GestureHandlerRootView
          style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Story />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  ],
};

type Story = StoryObj<typeof LineChartExample>;

export default meta;

export const Calendar = {
  args: {},
  argTypes: {},
} satisfies Story;
