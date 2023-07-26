import {Meta, StoryObj} from '@storybook/react-native';

import AvatarExample from './Example/AvatarExample';

import {
  IAvatarSize,
  ICounterTypes,
  IIndicatorTypes,
} from '@lad-tech/mobydick-core';

const meta: Meta<typeof AvatarExample> = {
  title: 'Other',
  component: AvatarExample,
};

type Story = StoryObj<typeof AvatarExample>;

export const Avatar = {
  args: {
    disabled: false,
    groupCount: 50,
    sizeUserIcon: IAvatarSize.M,
    sizeUserLogo: IAvatarSize.M,
    sizeUserText: IAvatarSize.M,
    sizeUserPhoto: IAvatarSize.M,
    indicatorTypes: IIndicatorTypes.primary,
    counterTypes: ICounterTypes.attention,
    firstName: 'Виктория',
    middleName: 'Андреевна',
    lastName: 'Лисина',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    sizeUserIcon: {
      options: Object.values(IAvatarSize),
      control: {
        type: 'select',
      },
    },
    sizeUserPhoto: {
      options: Object.values(IAvatarSize),
      control: {
        type: 'select',
      },
    },
    sizeUserLogo: {
      options: Object.values(IAvatarSize),
      control: {
        type: 'select',
      },
    },
    sizeUserText: {
      options: Object.values(IAvatarSize),
      control: {
        type: 'select',
      },
    },
    indicatorTypes: {
      options: Object.values(IIndicatorTypes),
      control: {
        type: 'select',
      },
    },
    counterTypes: {
      options: Object.values(ICounterTypes),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
