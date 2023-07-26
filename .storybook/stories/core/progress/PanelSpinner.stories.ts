import {ComponentStoryObj, Meta} from '@storybook/react-native';
import {actions} from '@storybook/addon-actions';

import {PanelSpinner as PanelSpinnerLib} from '@lad-tech/mobydick-core';

const meta: Meta<typeof PanelSpinnerLib> = {
  title: 'Core/progress',
  component: PanelSpinnerLib,
};

type Story = ComponentStoryObj<typeof PanelSpinnerLib>;

export const PanelSpinner = {
  args: {
    duration: 2500,
    isLoading: true,
    isError: false,
  },
  argTypes: {},
} satisfies Story;

export const PanelSpinnerCancel = {
  args: {
    duration: 2500,
    isLoading: true,
    isError: false,
    onCancel: () => {
      actions('cancel');
    },
  },
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isError: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;
export default meta;
