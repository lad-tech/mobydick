import {Meta, StoryObj} from '@storybook/react-native';

import selectFont from '../../utils/selectFont';

import CrossedTextExample from './Example/CrossedTextExample';

import {defaultTextLightColor} from '@lad-tech/mobydick-core';

const meta: Meta<typeof CrossedTextExample> = {
  title: 'Other',
  component: CrossedTextExample,
};

type Story = StoryObj<typeof CrossedTextExample>;

export const CrossedText = {
  args: {
    lineHeight: 1,
    font: 'Regular-Primary-S',
    lineColor: defaultTextLightColor.TextError,
    crossedText: 'Зачеркнутый текст',
  },
  argTypes: {
    font: {
      options: Object.values(selectFont),
      control: {
        type: 'select',
      },
    },
    lineColor: {
      control: {type: 'color'},
    },
  },
} satisfies Story;

export default meta;
