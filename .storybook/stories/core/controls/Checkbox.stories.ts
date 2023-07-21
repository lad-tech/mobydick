import {Meta, StoryObj} from '@storybook/react-native';

import CheckboxExample from './Checkbox/CheckboxExample';
import {optionOne} from './constants';

const meta: Meta<typeof CheckboxExample> = {
  title: 'Core/Controls',
  component: CheckboxExample,
};

type Story = StoryObj<typeof CheckboxExample>;

export const Checkbox = {
  args: {
    disabled: false,
    textOne: optionOne,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
