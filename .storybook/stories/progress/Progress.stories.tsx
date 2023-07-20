import {boolean, color, number, select} from '@storybook/addon-knobs';
import React from 'react';
import {action} from '@storybook/addon-actions';

import CenterView from '../CenterView';

import {
  Indicator,
  ISizeSpinner,
  PanelSpinner,
  Spinner,
} from '@lad-tech/mobydick-core';

export default {
  title: 'Design System/Progress/',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const _PanelSpinner = () => (
  <PanelSpinner
    duration={number('duration', 2500)}
    isLoading={boolean('isLoading', true)}
    isError={boolean('isError', false)}
  />
);

_PanelSpinner.story = {
  name: 'PanelSpinner',
};

export const PanelSpinnerCancel = () => (
  <PanelSpinner
    duration={number('duration', 2500)}
    isLoading={boolean('isLoading', true)}
    isError={boolean('isError', false)}
    onCancel={action('onCancel')}
  />
);

PanelSpinnerCancel.story = {
  name: 'PanelSpinner cancel',
};

export const _Indicator = () => (
  <Indicator
    percent={number('percent', 20)}
    indicatorStyles={{backgroundColor: color('color', '#2B78EE')}}
  />
);

export const _Spinner = () => (
  <Spinner
    duration={number('duration', 2500)}
    size={select('size', ISizeSpinner, ISizeSpinner.S)}
  />
);
