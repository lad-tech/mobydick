import {Meta, StoryObj} from '@storybook/react-native';

import CounterExample from './Example/CounterExample';

import {ICounterSize} from '@lad-tech/mobydick-core';

const meta: Meta<typeof CounterExample> = {
  title: 'Other',
  component: CounterExample,
};

type Story = StoryObj<typeof CounterExample>;

export const Counter = {
  args: {
    accentLightCount: 8,
    accentLightSize: ICounterSize.medium,
    attentionCount: 28,
    attentionSize: ICounterSize.medium,
    attentionLightCount: 132,
    attentionLightSize: ICounterSize.medium,
    accentCount: 88,
    accentSize: ICounterSize.medium,
    mutedCount: 132,
    mutedSize: ICounterSize.medium,
    mutedLightCount: 2,
    mutedLightSize: ICounterSize.medium,
    customCount: 129,
    maxLengthCount: 3,
    customSize: ICounterSize.medium,
  },
  argTypes: {
    accentLightSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    attentionSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    accentSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    mutedSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    mutedLightSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    attentionLightSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
    customSize: {
      options: Object.values(ICounterSize),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
