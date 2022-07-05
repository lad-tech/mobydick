import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PanelSpinner} from '@npm/mobydick-progress';
import {boolean, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

storiesOf('Design System/Progress/PanelSpinner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <PanelSpinner
      speed={number('speed', 2500)}
      isSpin={boolean('isSpin', true)}
      isError={boolean('isError', false)}
      onCancel={action('onCancel')}
    />
  ));
