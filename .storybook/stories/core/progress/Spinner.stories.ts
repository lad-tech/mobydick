import {ComponentStoryObj, Meta} from '@storybook/react-native';

import {ISizeSpinner, Spinner as SpinnerLib} from '@lad-tech/mobydick-core';

const meta: Meta<typeof SpinnerLib> = {
  title: 'Core/progress',
  component: SpinnerLib,
};

type Story = ComponentStoryObj<typeof SpinnerLib>;

export const Spinner = {
  args: {
    duration: 2500,
    size: ISizeSpinner.S,
  },
  argTypes: {
    size: {
      options: Object.values(ISizeSpinner),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
