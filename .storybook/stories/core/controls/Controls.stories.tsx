import {Meta, StoryObj} from '@storybook/react-native';

import RadioExample from './Radio/RadioExample';
import {optionOne} from './constants';

const meta: Meta<typeof RadioExample> = {
  title: 'Core/Controls',
  component: RadioExample,
};

type Story = StoryObj<typeof RadioExample>;

export const Radio = {
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
