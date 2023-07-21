import {Meta, StoryObj} from '@storybook/react-native';

import selectFont from '../../../utils/selectFont';

import ExampleButton, {IViewButton} from './Button/ExampleButton';

import {IButtonSize, IButtonTypes, iconNames} from '@lad-tech/mobydick-core';

const meta: Meta<typeof ExampleButton> = {
  title: 'Core/CTA',
  component: ExampleButton,
};
type Story = StoryObj<typeof ExampleButton>;

export const Button = {
  args: {
    type: IButtonTypes.primary,
    textButton: 'text big text',
    minWidth: 0,
    size: IButtonSize.fixed,
    disabled: false,
    loading: false,
    font: 'SemiBold-White-XS',
    viewButton: IViewButton.noIcon,
    leftIcon: 'icon-plus',
    count: 0,
  },
  argTypes: {
    type: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    leftIcon: {
      options: Object.values(iconNames),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(IButtonSize),
      control: {
        type: 'select',
      },
    },
    viewButton: {
      options: Object.values(IViewButton),
      control: {
        type: 'select',
      },
    },
    font: {
      options: Object.values(selectFont),
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
