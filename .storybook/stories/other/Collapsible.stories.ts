import {Meta, StoryObj} from '@storybook/react-native';

import CollapsibleExample from './Example/CollapsibleExample';

const meta: Meta<typeof CollapsibleExample> = {
  title: 'Other',
  component: CollapsibleExample,
};

type Story = StoryObj<typeof CollapsibleExample>;

export const Collapsible = {
  args: {
    duration: 250,
    typeAnimation: 'easeInEaseOut',
    creationPropAnimation: 'opacity',
    titleOne: 'Collapsible 1',
    titleTwo: 'Collapsible 2',
    titleThree: 'Collapsible 3',
    numberOfLines: 2,
    isAnimated: true,
  },
  argTypes: {
    typeAnimation: {
      options: ['linear', 'easeInEaseOut', 'easeIn', 'easeOut'],
      control: {
        type: 'select',
      },
    },
    creationPropAnimation: {
      options: ['opacity', 'scaleX', 'scaleY', 'scaleXY'],
      control: {
        type: 'select',
      },
    },
    isAnimated: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
