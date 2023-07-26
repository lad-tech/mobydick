import {Meta, StoryObj} from '@storybook/react-native';

import DotsExample from './Example/DotsExample';

const meta: Meta<typeof DotsExample> = {
  title: 'Other',
  component: DotsExample,
};
type Story = StoryObj<typeof DotsExample>;

export const Dots = {
  args: {
    length: 17,
  },
  argTypes: {},
} satisfies Story;

export default meta;
