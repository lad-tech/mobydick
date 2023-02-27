import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';

import CheckboxListExample from './ControlsLists/CheckboxListExample';
import RadioListExample from './ControlsLists/RadioListExample';
import RadioExample from './Radio/RadioExample';
import CheckboxExample from './Checkbox/CheckboxExample';
import SwipeExample from './Swipe/SwipeExample';
import SliderExample from './SliderExample';

storiesOf('Design System/Controls/ControlsList.tsx', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Checkbox', () => <CheckboxExample />)
  .add('Radio', () => <RadioExample />)
  .add('Swipe', () => <SwipeExample />)
  .add('Checkbox list', () => <CheckboxListExample />)
  .add('Radio list', () => <RadioListExample />)
  .add('Slider', () => <SliderExample />);
