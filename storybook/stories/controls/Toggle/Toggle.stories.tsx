import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Toggle} from '@npm/mobydick-controls';
import {boolean} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/Toggle', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Toggle
      active={boolean('active', false)}
      disabled={boolean('disabled', false)}
    />
  ));
