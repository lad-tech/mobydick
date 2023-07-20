import React from 'react';

import CenterView from '../CenterView';

import CheckboxListExample from './ControlsLists/CheckboxListExample';
import RadioListExample from './ControlsLists/RadioListExample';
import RadioExample from './Radio/RadioExample';
import CheckboxExample from './Checkbox/CheckboxExample';
import SwipeExample from './Swipe/SwipeExample';
import SliderExample from './Slider/SliderExample';

export default {
  title: 'Design System/Controls/ControlsList.tsx',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Checkbox = () => <CheckboxExample />;
export const Radio = () => <RadioExample />;
export const Swipe = () => <SwipeExample />;
export const CheckboxList = () => <CheckboxListExample />;

CheckboxList.story = {
  name: 'Checkbox list',
};

export const RadioList = () => <RadioListExample />;

RadioList.story = {
  name: 'Radio list',
};

export const Slider = () => <SliderExample />;
