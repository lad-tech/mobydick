import {ComponentStoryObj, Meta} from '@storybook/react-native';

import {Indicator as IndicatorLib} from '@lad-tech/mobydick-core';

const meta: Meta<typeof IndicatorLib> = {
  title: 'Core/progress',
  component: IndicatorLib,
};

type Story = ComponentStoryObj<typeof IndicatorLib>;

export const Indicator = {
  args: {
    percent: 20,
  },
  argTypes: {},
} satisfies Story;

export default meta;
