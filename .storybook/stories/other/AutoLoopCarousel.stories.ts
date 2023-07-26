import {Meta, StoryObj} from '@storybook/react-native';
import {Dimensions} from 'react-native';

import AutoLoopCarouselExample from './Example/AutoLoopCarouselExample';

import {ICarouselAlign} from '@lad-tech/mobydick-core';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const meta: Meta<typeof AutoLoopCarouselExample> = {
  title: 'Other',
  component: AutoLoopCarouselExample,
};

type Story = StoryObj<typeof AutoLoopCarouselExample>;

export const AutoLoopCarousel = {
  args: {
    sideMargin: 5,
    activeItemId: 1,
    dataLength: 3,
    isDots: false,
    align: ICarouselAlign.start,
    timerAuto: 2000,
    itemWidth: WIDTH - 10,
    itemHeight: HEIGHT,
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
    animateAutoScroll: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

export default meta;
