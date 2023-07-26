import {Meta, StoryObj} from '@storybook/react-native';

import ShadowExample from './Example/ShadowExample';

const meta: Meta<typeof ShadowExample> = {
  title: 'Other',
  component: ShadowExample,
};

type Story = StoryObj<typeof ShadowExample>;

export const Shadow = {
  args: {
    elevation: 1,
    shadowOpacity: 0.5,
    shadowRadius: 4.27,
    heightShadowOffset: 1,
    widthShadowOffset: 0,
  },
  argTypes: {},
} satisfies Story;

export default meta;
