import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Indicator} from '@npm/mobydick-progress';
import {color, number} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

storiesOf('Design System/Progress/Indicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Indicator
      steps={number('steps', 10)}
      step={number('step', 4)}
      indicatorHeight={number('height', 10)}
      indicatorWidth={number('width', 300)}
      indicatorBorderRadius={number('borderRadius', 15)}
      indicatorColor={color('color', '#2B78EE')}
    />
  ));
