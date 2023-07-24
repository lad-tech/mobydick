import {ComponentStoryObj, Meta} from '@storybook/react-native';

import ExampleInput from './InputField/ExampleInput';

import {iconNames, IInputsTypes} from '@lad-tech/mobydick-core';

const meta: Meta<typeof ExampleInput> = {
  title: 'Core/inputs',
  component: ExampleInput,
};

type Story = ComponentStoryObj<typeof ExampleInput>;

export const InputField = {
  args: {
    subtitleIconName: 'icon-arrow-down',
    type: IInputsTypes.default,
    title: 'Название поля',
    placeholder: 'Введите что-нибудь',
    subtitle: 'Подпись',
    disabled: false,
    required: false,
    maxHeightMultiline: 200,
    showSubtitleIcon: false,
    rightIcon: 'icon-show',
  },
  argTypes: {
    subtitleIconName: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    type: {
      options: Object.values(IInputsTypes),
      control: {
        type: 'select',
      },
    },
    rightIcon: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    showSubtitleIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
