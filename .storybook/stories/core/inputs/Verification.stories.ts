import {ComponentStoryObj, Meta} from '@storybook/react-native';

import ExampleVerification from './Verification/ExampleVerification';

import {iconNames} from '@lad-tech/mobydick-core';

const meta: Meta<typeof ExampleVerification> = {
  title: 'Core/inputs',
  component: ExampleVerification,
};

type Story = ComponentStoryObj<typeof ExampleVerification>;

export const Verification = {
  args: {
    leftIcon: 'icon-search',
  },
  argTypes: {
    leftIcon: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
