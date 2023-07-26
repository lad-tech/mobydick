import {Meta, StoryObj} from '@storybook/react-native';

import StatusExample from './Example/StatusExample';
import ShadowExample from './Example/ShadowExample';

import {IStatusState} from '@lad-tech/mobydick-core';

const meta: Meta<typeof StatusExample> = {
  title: 'Other',
  component: StatusExample,
};

type Story = StoryObj<typeof ShadowExample>;

export const Status = {
  args: {
    state: IStatusState.gray,
  },
  argTypes: {
    state: {
      options: Object.values(IStatusState),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
