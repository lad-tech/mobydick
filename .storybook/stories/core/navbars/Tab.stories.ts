import {ComponentStoryObj, Meta} from '@storybook/react-native';

import {TabsExample} from './TabExample';

const meta: Meta<typeof TabsExample> = {
  title: 'Core/Navbars',
  component: TabsExample,
};

type Story = ComponentStoryObj<typeof TabsExample>;

export const Tab = {
  args: {},
  argTypes: {},
} satisfies Story;

export default meta;
