import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Indicator} from '@npm/mobydick-progress';
import {color, number} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

storiesOf('Design System/Progress/Indicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Indicator
      percent={number('percent', 20)}
      indicatorStyles={{backgroundColor: color('color', '#2B78EE')}}
    />
  ));
