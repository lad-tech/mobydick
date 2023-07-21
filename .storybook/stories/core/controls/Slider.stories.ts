import {Meta, StoryObj} from '@storybook/react-native';

import SliderExample from './Slider/SliderExample';

const meta: Meta<typeof SliderExample> = {
  title: 'Core/Controls',
  component: SliderExample,
};

type Story = StoryObj<typeof SliderExample>;

export const Slider = {
  args: {
    rangeDisabled: false,
  },
  argTypes: {
    rangeDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
