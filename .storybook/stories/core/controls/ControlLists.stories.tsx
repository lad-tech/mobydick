import {Meta, StoryObj} from '@storybook/react-native';
import React from 'react';

import CheckboxListExample from './ControlsLists/CheckboxListExample';
import {optionFour, optionOne, optionThree} from './constants';
import RadioListExample from './ControlsLists/RadioListExample';

const meta: Meta<typeof CheckboxListExample> = {
  title: 'Core/Controls/ControlsLists',
  component: CheckboxListExample,
};

type Story = StoryObj<typeof CheckboxListExample>;

export const Checkbox = {
  // TODO: need understand why type of args==any
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: args => <CheckboxListExample {...args} />,
  args: {
    single: false,
    disabled: false,
    textOne: optionOne,
    textTwo: optionOne,
    textThree: optionThree,
    textFour: optionFour,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    single: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;
export const Radio = {
  // TODO: need understand why type of args==any
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: args => <RadioListExample {...args} />,
  args: {
    single: true,
    disabled: false,
    textOne: optionOne,
    textTwo: optionOne,
    textThree: optionThree,
    textFour: optionFour,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    single: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
