import {Meta, StoryObj} from '@storybook/react-native';

import CarouselExample from './Example/CarouselExample';

import {ICarouselAlign} from '@lad-tech/mobydick-core';

const meta: Meta<typeof CarouselExample> = {
  title: 'Other',
  component: CarouselExample,
};

type Story = StoryObj<typeof CarouselExample>;

export const Carousel = {
  args: {
    itemWidth: 200,
    itemHeight: 100,
    sideMargin: 12,
    activeItemId: 1,
    data: 10,
    isDots: true,
    align: ICarouselAlign.start,
    isLoop: true,
    animateAutoScroll: true,
  },
  argTypes: {
    align: {
      options: Object.values(ICarouselAlign),
      control: {
        type: 'select',
      },
    },
    isDots: {
      control: {
        type: 'boolean',
      },
    },
    isLoop: {
      control: {
        type: 'boolean',
      },
    },
    animateAutoScroll: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
