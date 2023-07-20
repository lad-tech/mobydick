import React from 'react';

import CenterView from '../CenterView';

import CounterExample from './Example/CounterExample';
import DotsExample from './Example/DotsExample';
import AvatarExample from './Example/AvatarExample';
import BadgeIndicatorExample from './Example/BadgeIndicatorExample';
import CrossedTextExample from './Example/CrossedTextExample';
import CarouselExample from './Example/CarouselExample';
import StatusExample from './Example/StatusExample';
import ShadowExample from './Example/ShadowExample';
import CollapsibleExample from './Example/CollapsibleExample';
import AutoCarouselExample from './Example/AutoCarouselExample';
import AutoLoopCarouselExample from './Example/AutoLoopCarouselExample';

export default {
  title: 'Design system/Other',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Dots = () => <DotsExample />;
export const Counter = () => <CounterExample />;
export const BadgeIndicator = () => <BadgeIndicatorExample />;

BadgeIndicator.story = {
  name: 'Badge indicator',
};

export const CrossedText = () => <CrossedTextExample />;

CrossedText.story = {
  name: 'Crossed text',
};

export const Carousel = () => <CarouselExample />;
export const Avatar = () => <AvatarExample />;
export const Shadow = () => <ShadowExample />;
export const Collapsible = () => <CollapsibleExample />;
export const Status = () => <StatusExample />;
export const AutoCarousel = () => <AutoCarouselExample />;

AutoCarousel.story = {
  name: 'AutoCarousel',
};

export const AutoLoopCarousel = () => <AutoLoopCarouselExample />;

AutoLoopCarousel.story = {
  name: 'AutoLoopCarousel',
};
