import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PanelSpinner} from '@npm/mobydick-core';
import {boolean, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

storiesOf('Design System/Progress/PanelSpinner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <PanelSpinner
      duration={number('duration', 2500)}
      isLoading={boolean('isLoading', true)}
      isError={boolean('isError', false)}
    />
  ))
  .add('with cancel', () => (
    <PanelSpinner
      duration={number('duration', 2500)}
      isLoading={boolean('isLoading', true)}
      isError={boolean('isError', false)}
      onCancel={action('onCancel')}
    />
  ));
