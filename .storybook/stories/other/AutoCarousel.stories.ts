import {Meta, StoryObj} from '@storybook/react-native';
import {Dimensions} from 'react-native';

import AutoCarouselExample from './Example/AutoCarouselExample';

import {ICarouselAlign} from '@lad-tech/mobydick-core';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const meta: Meta<typeof AutoCarouselExample> = {
  title: 'Other',
  component: AutoCarouselExample,
};

type Story = StoryObj<typeof AutoCarouselExample>;

export const AutoCarousel = {
  args: {
    sideMargin: 5,
    activeItemId: 1,
    dataLength: 3,
    align: ICarouselAlign.start,
    timerAuto: 2000,
    itemWidth: WIDTH - 10,
    itemHeight: HEIGHT,
    animateAutoScroll: true,
    isDots: false,
  },
  argTypes: {
    align: {
      options: Object.values(ICarouselAlign),
      control: {
        type: 'select',
      },
    },
    animateAutoScroll: {
      control: {
        type: 'boolean',
      },
    },
    isDots: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
