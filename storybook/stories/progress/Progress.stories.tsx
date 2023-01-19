import {storiesOf} from '@storybook/react-native';
import {
  Indicator,
  ISizeSpinner,
  PanelSpinner,
  Spinner,
} from '@npm/mobydick-core';
import {boolean, color, number, select} from '@storybook/addon-knobs';
import React from 'react';
import {action} from '@storybook/addon-actions';

import CenterView from '../CenterView';

storiesOf('Design System/Progress/', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('PanelSpinner', () => (
    <PanelSpinner
      duration={number('duration', 2500)}
      isLoading={boolean('isLoading', true)}
      isError={boolean('isError', false)}
    />
  ))
  .add('PanelSpinner cancel', () => (
    <PanelSpinner
      duration={number('duration', 2500)}
      isLoading={boolean('isLoading', true)}
      isError={boolean('isError', false)}
      onCancel={action('onCancel')}
    />
  ))
  .add('Indicator', () => (
    <Indicator
      percent={number('percent', 20)}
      indicatorStyles={{backgroundColor: color('color', '#2B78EE')}}
    />
  ))
  .add('Spinner', () => (
    <Spinner
      duration={number('duration', 2500)}
      size={select('size', ISizeSpinner, ISizeSpinner.S)}
    />
  ));
