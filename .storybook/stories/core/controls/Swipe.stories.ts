import {Meta, StoryObj} from '@storybook/react-native';

import SwipeExample from './Swipe/SwipeExample';

const meta: Meta<typeof SwipeExample> = {
  title: 'Core/Controls',
  component: SwipeExample,
};

type Story = StoryObj<typeof SwipeExample>;

export const Swipe = {
  args: {},
  argTypes: {},
} satisfies Story;

export default meta;
