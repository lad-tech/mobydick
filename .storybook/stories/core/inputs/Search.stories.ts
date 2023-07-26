import {ComponentStoryObj, Meta} from '@storybook/react-native';

import ExampleSearch from './Search/ExampleSearch';

import {iconNames} from '@lad-tech/mobydick-core';

const meta: Meta<typeof ExampleSearch> = {
  title: 'Core/inputs',
  component: ExampleSearch,
};

type Story = ComponentStoryObj<typeof ExampleSearch>;

export const Search = {
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
