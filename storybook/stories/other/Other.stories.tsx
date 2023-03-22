import {storiesOf} from '@storybook/react-native';
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

storiesOf('Design system/Other', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Dots', () => <DotsExample />)
  .add('Counter', () => <CounterExample />)
  .add('Badge indicator', () => <BadgeIndicatorExample />)
  .add('Crossed text', () => <CrossedTextExample />)
  .add('Carousel', () => <CarouselExample />)
  .add('Avatar', () => <AvatarExample />)
  .add('Shadow', () => <ShadowExample />)
  .add('Collapsible', () => <CollapsibleExample />)
  .add('Status', () => <StatusExample />);
