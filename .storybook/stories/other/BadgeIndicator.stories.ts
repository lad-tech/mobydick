import {Meta, StoryObj} from '@storybook/react-native';

import BadgeIndicatorExample from './Example/BadgeIndicatorExample';
import AvatarExample from './Example/AvatarExample';

import {IIndicatorTypes} from '@lad-tech/mobydick-core';

const meta: Meta<typeof BadgeIndicatorExample> = {
  title: 'Other',
  component: BadgeIndicatorExample,
};

type Story = StoryObj<typeof AvatarExample>;

export const BadgeIndicator = {
  args: {
    type: IIndicatorTypes.primary,
    top: 0,
    right: 0,
  },
  argTypes: {
    type: {
      options: Object.values(IIndicatorTypes),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
